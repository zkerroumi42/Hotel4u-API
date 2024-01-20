import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthenticate, Role } from './interface/Role';
// import {faker} from '@faker-js/faker';
import { AuthenticateDto } from './dto/authenticate.dto';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}


  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
    const user = await this.userRepository.findOne({
        where: { email: authenticateDto.email }
    });

    if (!user) {
        throw new NotFoundException('Invalid credentials');
    }

    const isPasswordValid = await compare(authenticateDto.password, user.password);

    if (!isPasswordValid) {
        throw new NotFoundException('Invalid credentials');
    }

    const token = sign({ ...user }, 'secrete');
    return { token, user };
}
      
}
