import { Controller, Body, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { TokenDto } from './dto/token.dto';

@Controller('auth')
export class AuthController {
  @Post()
  login(@Body() authDto: AuthDto): TokenDto {
    return { token: 'this is token', id: 1 };
  }
}
