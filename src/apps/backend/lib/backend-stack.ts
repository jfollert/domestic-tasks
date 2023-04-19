import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
;

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Crear la tabla DynamoDB
    const tasksTable = new dynamodb.Table(this, 'TasksTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Crear la función Lambda
    const tasksLambda = new lambda.Function(this, 'TasksLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'tasks.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        TASKS_TABLE_NAME: tasksTable.tableName,
      },
    });

    // Permitir que la función Lambda acceda a la tabla DynamoDB
    tasksTable.grantReadWriteData(tasksLambda);

    // Crea la capa de AWS Lambda
    const tasksLayer = new lambda.LayerVersion(this, "TasksLayer", {
      code: lambda.Code.fromAsset("layers/tasksLayer"),
      compatibleRuntimes: [lambda.Runtime.NODEJS_14_X],
      description: "Tasks module from src/contexts/management/tasks",
    });

    // Asocia la capa a la función Lambda
    tasksLambda.addLayers(tasksLayer);

    // Crear la API Gateway
    const api = new apigateway.RestApi(this, 'TasksApi', {
      restApiName: 'Tasks Service',
    });

    const tasksResource = api.root.addResource('tasks');
    const tasksIntegration = new apigateway.LambdaIntegration(tasksLambda);

    // Configurar las rutas y métodos de la API
    tasksResource.addMethod('GET', tasksIntegration);
    tasksResource.addMethod('POST', tasksIntegration);
    tasksResource.addMethod('PUT', tasksIntegration);
    tasksResource.addMethod('DELETE', tasksIntegration);
  }
  
}
