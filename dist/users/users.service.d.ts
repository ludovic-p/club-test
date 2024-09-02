import { CreateUserDto } from './dto/create-user.dto';
import { PutUserDto } from './dto/put-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        description: string;
        password: string;
        avatar_url: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, putUserDto: PutUserDto): string;
    remove(id: number): string;
}
