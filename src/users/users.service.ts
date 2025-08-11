import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';

@Injectable()
export class UsersService {
  //injectable service for user-related operations

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const isEmailExists = await this.usersRepository.findOne({
      where: { email: data.email },
    });

    if (isEmailExists) {
      throw new ConflictException('Email already exists');
    }
    const newUser = this.usersRepository.create(data);
    return this.usersRepository.save(newUser);
  }
}
