export class Task {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public isCompleted: boolean,
    ) {}
  
    completeTask() {
      this.isCompleted = true;
    }

    uncompleteTask() {
        this.isCompleted = false;
    }
  }
  