import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
// import { InMemoryTaskRepository } from '@jfollert/tasks';
// import { CreateTask } from '@jfollert/tasks/application';

// const taskRepository = new InMemoryTaskRepository();
// const createTask = new CreateTask(taskRepository);

export async function handler(event: APIGatewayProxyEvent, _context: Context): Promise<APIGatewayProxyResult> {
  try {
    const { httpMethod, body } = event;

    switch (httpMethod) {
      case 'POST': {
        const { title, description } = JSON.parse(body || '{}');
        // const task = await createTask.execute(title, description);

        return response(201, undefined);
      }
      // Agregar aquí otros métodos (GET, PUT, DELETE) y sus respectivos casos de uso
      default: {
        return response(405, { error: 'Method not allowed' });
      }
    }
  } catch (error) {
    console.error(error);
    return response(500, { error: 'Internal server error' });
  }
}

function response(statusCode: number, data: any): APIGatewayProxyResult {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
    },
  };
}
