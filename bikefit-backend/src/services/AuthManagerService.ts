import { UserService, AuthService } from './index'
import { IUser, IUserCreation } from '@/interfaces';
import { User } from '@/models';

interface IAuthService {
    comparePasswords(password: string, hash: string): Promise<boolean>;
    generateToken(payload: object): string;
    hashPassword(password: string): Promise<string>;
}
interface IUserService {
    getUserByEmail(email: string): Promise<IUser | null>;
}

export class AuthManagerService {
    private userService: IUserService;
    private authService: IAuthService;

    constructor(userService: IUserService, authService: IAuthService) {
        this.userService = userService;
        this.authService = authService;
    }
    public async login(email: string, password: string): Promise<{ user: IUser, token: string } | null> {
        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            return null;
        };
        const tokenPayload = {
            name: user.name,
            email: user.email
        };
        const isPasswordValid = await this.authService.comparePasswords(password, user.password);
        if (isPasswordValid) {
            const token = this.authService.generateToken(tokenPayload);
            return { user, token }
        } else {
            console.log("Senha inválida para o usuário: ", email);
            return null
        };
    };
    public async createUser(data: IUserCreation): Promise<{ user: User, token: string } | null> {
        console.log("Dados recebidos no createUser: ", data);
        console.log("Entrou no service createUser")
        const hashedPassword = await this.authService.hashPassword(data.password);
        data.password = hashedPassword;
        const newUser = await User.create(data);
        const tokenPayload = {
            email: newUser.email,
            password: newUser.password
        }
        if (!newUser) {
            return null;
        }
        const token = this.authService.generateToken(tokenPayload);
        console.log("Token gerado: ", token);
        return { user: newUser, token };
    }
}

export default new AuthManagerService(UserService, AuthService)