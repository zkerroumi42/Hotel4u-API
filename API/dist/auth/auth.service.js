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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async authenticate(authenticateDto) {
        const user = await this.userRepository.findOne({
            where: { email: authenticateDto.email }
        });
        if (!user) {
            throw new common_1.NotFoundException('Invalid credentials');
        }
        const isPasswordValid = await (0, bcrypt_1.compare)(authenticateDto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.NotFoundException('Invalid credentials');
        }
        const token = (0, jsonwebtoken_1.sign)({ ...user }, 'secrete');
        return { token, user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map