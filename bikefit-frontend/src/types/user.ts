export interface IUser {
    id?: number,
    email: string,
    name: string,
    password: string
}

export interface IPaginatedUserResponse {
    data: IUser[];
    totalReg: number;
    limit: number;
    paginate: number;
}

export type IUserCreationPayload = Omit<IUser, 'id'>;