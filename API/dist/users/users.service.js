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
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(createUserDto) {
        const salt = await bcrypt.genSalt();
        const userEntity = new user_entity_1.User();
        userEntity.nom = createUserDto.nom;
        userEntity.prenom = createUserDto.prenom;
        userEntity.userName = createUserDto.userName;
        userEntity.email = createUserDto.email;
        userEntity.password = await bcrypt.hash(createUserDto.password, salt);
        if (createUserDto.role in Role_1.Role) {
            userEntity.role = createUserDto.role;
        }
        else {
            throw new Error('Invalid role specified');
        }
        userEntity.userUUID = createUserDto.userUUID;
        const user = await this.userRepository.save(userEntity);
        return user;
    }
    async signIn(userName, pass) {
        const user = await this.userRepository.findOne({ where: { "userName": userName } });
        if (user?.password !== pass) {
            throw new common_1.NotFoundException('Invalid credentials');
        }
        const token = (0, jsonwebtoken_1.sign)({ ...user }, 'secrete');
        return { token, user };
    }
    async findAll() {
        return this.userRepository.find();
    }
    async create(user) {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map