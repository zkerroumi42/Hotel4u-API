"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_entity_1 = require("./entities/user.entity");
const Role_1 = require("../auth/interface/Role");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const email_service_1 = require("../email/email.service");
let UsersService = class UsersService {
    constructor(userRepository, emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    async register(createUserDto) {
        const salt = await bcrypt.genSalt();
        const pass = await bcrypt.hash(createUserDto.password, salt);
        const userEntity = new user_entity_1.User();
        userEntity.nom = createUserDto.nom;
        userEntity.prenom = createUserDto.prenom;
        userEntity.email = createUserDto.email;
        userEntity.password = pass;
        if (createUserDto.role in Role_1.Role) {
            userEntity.role = createUserDto.role;
        }
        else {
            throw new Error('Invalid role specified');
        }
        userEntity.phoneNumber = createUserDto.phoneNumber;
        const user = await this.userRepository.save(userEntity);
        return user;
    }
    async signIn(email, pass) {
        const user = await this.userRepository.findOne({ where: { "email": email } });
        const salt = await bcrypt.genSalt();
        const passs = await bcrypt.hash(pass, salt);
        console.log(passs);
        if (user?.password !== passs) {
            throw new common_1.NotFoundException('Invalid credentials');
        }
        const token = (0, jsonwebtoken_1.sign)({ ...user }, 'secrete');
        return { token, user };
    }
    async findAll() {
        return this.userRepository.find();
    }
    async read(id) {
        return await this.userRepository.findOne({ where: { id, } });
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOne({ where: { email, } });
    }
    async count() {
        return await this.userRepository.count();
    }
    async create(user) {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }
    async update(id, data) {
        await this.userRepository.update({ id }, data);
        const user = await this.userRepository.findOne({ where: { id } });
        return user;
    }
    async delete(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        await this.userRepository.delete(user);
        return user;
    }
    async changePassword(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur introuvable');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        await this.userRepository.update({ email }, { password: hashedPassword });
    }
    async forgotPassword(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const resetToken = this.generateUniqueResetToken();
        const expirationDate = this.getExpirationDate();
        user.resetToken = resetToken;
        user.resetTokenExpires = expirationDate;
        await this.userRepository.save(user);
        this.emailService.sendPasswordResetEmail(email, resetToken);
    }
    generateUniqueResetToken() {
        const uniqueToken = uuid.v4();
        return uniqueToken;
    }
    getExpirationDate() {
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 1);
        return expirationDate;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        email_service_1.EmailService])
], UsersService);
//# sourceMappingURL=users.service.js.map