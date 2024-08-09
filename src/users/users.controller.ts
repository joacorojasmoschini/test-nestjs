import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() body: { username: string; password: string; description?: string },
  ): Promise<User> {
    console.log('Request body:', body); // Añade un log para verificar la solicitud
    return this.usersService.createUser(body.username, body.password, body.description);
  }
}
