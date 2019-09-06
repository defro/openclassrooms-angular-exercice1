export class Post {

  public title: string;
  public content: string;
  public loveIts: number;
  public createdAt: Date;

  constructor(
    title: string,
    content: string,
    loveIts: number,
    createdAt?: Date
  ) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt ? createdAt : new Date();
  }
}
