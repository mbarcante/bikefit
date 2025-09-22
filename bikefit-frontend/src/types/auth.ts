import { IUser } from "./user";

export type IAuthUserCreation = Omit<
    IUser,
    "id" | "createdAt" | "updatedAt"
>;
