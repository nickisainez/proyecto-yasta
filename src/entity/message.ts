export type Message = {
  id: number;
  message: string;
  type: string;
  is_readed: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
  id_user: number;
  id_room: number;
};
