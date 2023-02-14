export interface LocalUser {
  email: string;
  password: string;
}

export interface User extends LocalUser {
  id: string;
}
