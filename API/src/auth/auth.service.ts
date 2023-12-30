import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthenticate, Role } from './interface/Role';
import {faker} from '@faker-js/faker';
import { AuthenticateDto } from './dto/authenticate.dto';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

    users = [
       {
        id: faker.datatype.uuid(),
        userName:"zkerroumi42",
        password:'zkerroumi',
        role:Role.Admin,
       },
       {
        id: faker.datatype.uuid(),
        userName:"herochoussama",
        password:'oussama',
        role:Role.User,
       }
    ]



    async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
      const user = await this.userRepository.findOne({
          where: { "userName": authenticateDto.userName, "password": authenticateDto.password }
      });
      
  
      if (!user) {
          throw new NotFoundException('Invalid credentials');
      }
  
      const token = sign({ ...user }, 'secrete');
      return { token, user };
  }
      
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { IAuthenticate, Role } from './interface/Role';
// import { AuthenticateDto } from './dto/authenticate.dto';
// import { sign } from 'jsonwebtoken';
// import { Repository } from 'typeorm';

// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from 'src/users/entities/user.entity';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ) {}

//   async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
//     const user = await this.userRepository.findOne({
//       where: {
//         userName: authenticateDto.userName,
//         password: authenticateDto.password,
//       },
//     });

//     if (!user) {
//       throw new NotFoundException('Invalid credentials');
//     }

//     const token = sign({ ...user }, 'secrete');

//     return { token, user };
//   }
// }
