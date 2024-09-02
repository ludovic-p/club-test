import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { db } from '../db/db.service'

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const created_user = await db.user.create({ data: createUserDto })
    return created_user
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, putUserDto: PutUserDto) {
    return `This action updates or create a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
