export class Todo{
  public id: number;
  public title: string;
  public done: boolean;

  constructor(id: number, title: string, done: boolean){
    this.id = new Date().getTime();
    this.title = title;
    this.done = false;
  }
}