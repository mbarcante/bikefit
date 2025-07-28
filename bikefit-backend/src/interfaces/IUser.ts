export interface IUser {
    id?: number,
    email: string,
    name: string,
    password: string
}

export type IUserCreation = Omit<IUser, 'id'>;
