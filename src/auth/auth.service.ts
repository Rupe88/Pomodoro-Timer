import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import bcryt from 'bcrypt';
@Injectable()
export class AuthService {
  async register(createUserDto: CreateUserDto) {
    // For example, hashing the password before saving to the database
    const hashedPassword = await bcryt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;

    //save user in the databse
    return createUserDto;
  }
}
