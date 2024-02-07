export type PostProps = {
  _id: string;
  userId: string;
  title: string;
  desc: string;
  slug: string;
  createdAt?: Date;
  img?: string;
};

export type UserProps = {
  _id: string;
  email: string;
  username: string;
  isAdmin: boolean;
  img?: string;
  createdAt?: Date;
};
