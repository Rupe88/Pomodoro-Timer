import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Injecting UsersService to handle user-related operations
  ) {}
  async register(createUserDto: CreateUserDto) {
    const hashedPassword = createUserDto.password; // Here you would hash the password
    createUserDto.password = hashedPassword; // Assign the hashed password back to the DTO

    await this.usersService.createUser(createUserDto); // Call the UsersService to create a new user
    return createUserDto;
  }
}
