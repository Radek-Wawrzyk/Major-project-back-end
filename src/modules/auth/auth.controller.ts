import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

    // @Post('login')
    // login(@Body() payload: any): any {
    //   return this.authService.login();
    // }
    
    // @Post('register')
    // register(): any {
    //   return this.authService.register();
    // }
  }
}
