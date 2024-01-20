import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"; 
import { Repository } from "typeorm";
import { sign } from 'jsonwebtoken';
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create.user.dto";
import { Role } from "src/auth/interface/Role";

import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';
// import { AuthenticateDto } from "src/auth/dto/authenticate.dto";
import { EmailService } from "src/email/email.service";



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly emailService: EmailService,
  ) {}

  async register(createUserDto: CreateUserDto) {

    const salt=await bcrypt.genSalt();
    const pass=await bcrypt.hash(createUserDto.password, salt);
    const userEntity = new User();

    userEntity.nom = createUserDto.nom;
    userEntity.prenom = createUserDto.prenom;
    userEntity.email = createUserDto.email;
    userEntity.password =pass;
    
    if (createUserDto.role in Role) {
        userEntity.role = createUserDto.role as Role;
    } else {
        throw new Error('Invalid role specified');
    }
    userEntity.phoneNumber= createUserDto.phoneNumber;
    const user = await this.userRepository.save(userEntity);
    return user;
}

 
  async signIn(email: string, pass: string): Promise<any> {

    const user = await this.userRepository.findOne({where:{"email":email}});
      const salt=await bcrypt.genSalt();
      const passs =await bcrypt.hash(pass, salt);
      console.log(passs);
    if (user?.password !== passs) { 
      throw new NotFoundException('Invalid credentials');
    } 
 
      const token = sign({ ...user }, 'secrete');
      return { token, user };

  } 
  

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async read(id:number): Promise<User>{
    return await this.userRepository.findOne({where: {id,}});
    }

    async findOneByEmail(email:string): Promise<User>{
      return await this.userRepository.findOne({where: {email,}});
      }
      
    async count(){
      return await this.userRepository.count();
    }

  async create(user: Partial<User>): Promise<User> {  
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }


  async update(id :number ,data:Partial<CreateUserDto>){
    await this.userRepository.update({id},data);
    const user= await this.userRepository.findOne({where: {id}});
    return user;
    }
  
    async delete(id:number){
      const user= await this.userRepository.findOne({where: {id}});
      await this.userRepository.delete(user);
      return user;
    }

    // password

    async changePassword(email: string, password: string): Promise<void> {
      const user = await this.userRepository.findOne({ where: { email } });
    
      if (!user) {
        throw new NotFoundException('Utilisateur introuvable');
      }
    
      const salt=await bcrypt.genSalt();
      const hashedPassword =await bcrypt.hash(password, salt);

      await this.userRepository.update({ email }, { password: hashedPassword });

    }




    
      // these methodes advanced

    async forgotPassword(email: string): Promise<void> {
      const user = await this.userRepository.findOne({ where: { email } });
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      const resetToken = this.generateUniqueResetToken();
      const expirationDate = this.getExpirationDate();
  
      user.resetToken = resetToken;
      user.resetTokenExpires = expirationDate;
      await this.userRepository.save(user);
      this.emailService.sendPasswordResetEmail(email, resetToken);
    }
  
    private generateUniqueResetToken(): string {
      const uniqueToken = uuid.v4();
      return uniqueToken;
    }
  
    private getExpirationDate(): Date {
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1);
      return expirationDate;
    }
  }
    
