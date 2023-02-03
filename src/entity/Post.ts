export type Post = {
  id: number;
  content: string;
  id_user: number;
  type: string;
  state: boolean;
  scope: string;
  link: string;
  created_at: Date;
  updated_at: Date;
};
