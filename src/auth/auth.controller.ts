import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
//changesssss
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    // Logic for user registration
    return await this.authService.register(createUserDto);
  }
}
