export interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
