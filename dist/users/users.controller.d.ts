import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PutUserDto } from './dto/put-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): string;
    update(id: string, PutUserDto: PutUserDto): string;
    remove(id: string): string;
}
