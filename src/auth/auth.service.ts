import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import bcryt from 'bcrypt';
@Injectable()
export class AuthService {
  async register(createUserDto: CreateUserDto) {
    // Logic for user registration

    // For example, hashing the password before saving to the database
    const hashedPassword = await bcryt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    return createUserDto;
  }
}
