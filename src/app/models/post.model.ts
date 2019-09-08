export class Post {

  public title: string;
  public content: string;
  public loveIts: number;
  public timestamp: number;
  public createdAt: Date;

  constructor(
    title: string,
    content: string,
    loveIts?: number,
    createdAt?: Date
  ) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts ? loveIts : 0;
    this.createdAt = createdAt ? createdAt : new Date();
    this.timestamp = createdAt ? createdAt.getTime() : Date.now();
  }

}
