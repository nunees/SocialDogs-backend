// DTO - Data transfer object
export interface ICreateUserDTO{
  id?: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}