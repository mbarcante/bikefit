import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_TIME = "1h";

export class AuthService {
    public async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        return await bcrypt.hash(password, salt);
    }
    public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    }
    public generateToken(payload: object): string {
        if (!JWT_SECRET) {
            throw new Error("JWT secret is not defined");
        }
        const token = jwt.sign(payload, JWT_SECRET as string, { expiresIn: JWT_EXPIRATION_TIME });
        return token;
    }
    public verifyToken(token: string): any {
        if (!JWT_SECRET) {
            throw new Error("JWT secret is not defined");
        }
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            throw new Error("Token verification failed");
        }
    }
    public decodeToken(token: string): any {
        if (!JWT_SECRET) {
            throw new Error("JWT secret is not defined");
        }
        try {
            const decoded = jwt.decode(token);
            return decoded;
        } catch (error) {
            throw new Error("Token decoding failed");
        }
    }
}

export default new AuthService();