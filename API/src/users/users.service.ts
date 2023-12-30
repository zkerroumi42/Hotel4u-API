import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Repository } from "typeorm";
import { sign } from 'jsonwebtoken';
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create.user.dto";
import { Role } from "src/auth/interface/Role";

import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}


  // async register(createUserDto: CreateUserDto){
  //   const userentity=new User();
  //       userentity.nom=createUserDto.nom;
  //       userentity.prenom=createUserDto.prenom;
  //       userentity.userName=createUserDto.userName;
  //       userentity.email=createUserDto.email;
  //       userentity.password=createUserDto.password;
  //       userentity.role=(Role)createUserDto.role;
  //       userentity.userUUID=createUserDto.userUUID;
  //       const user=this.userRepository.create(userentity);
  //       await this.userRepository.save(userentity);
  //     return user;
  // }
  async register(createUserDto: CreateUserDto) {

    const salt=await bcrypt.genSalt();
    const userEntity = new User();
    userEntity.nom = createUserDto.nom;
    userEntity.prenom = createUserDto.prenom;
    userEntity.userName = createUserDto.userName;
    userEntity.email = createUserDto.email;
    userEntity.password =await bcrypt.hash(createUserDto.password, salt);
    
    // Make sure the role is a valid value from the Role enum
    if (createUserDto.role in Role) {
        userEntity.role = createUserDto.role as Role;
    } else {
        // Handle invalid role (throw an error, set a default value, etc.)
        throw new Error('Invalid role specified');
    }

    userEntity.userUUID = createUserDto.userUUID;

    const user = await this.userRepository.save(userEntity);
    return user;
}
 
  async signIn(userName: string, pass: string): Promise<any> {


     
    const user = await this.userRepository.findOne({where:{"userName":userName}});
    if (user?.password !== pass) { 
      throw new NotFoundException('Invalid credentials');
    } 
 
      const token = sign({ ...user }, 'secrete');
      return { token, user };

  } 

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: Partial<User>): Promise<User> {  
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }
 
}