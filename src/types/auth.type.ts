export type Auth = {
  token: string | '';
  admin: Admin | null;
};

type Admin = {
  email: string | '';
  name: string | '';
};

export type UserData = {
  email: string | '';
  password: string | '';
  name: string | '';
};
