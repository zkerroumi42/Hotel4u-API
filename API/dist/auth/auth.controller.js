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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const authenticate_dto_1 = require("./dto/authenticate.dto");
const create_user_dto_1 = require("../users/dto/create.user.dto");
const users_service_1 = require("../users/users.service");
const notification_service_1 = require("../notifications/notification.service");
const forgot_password_dto_1 = require("../users/dto/forgot-password.dto");
let AuthController = class AuthController {
    constructor(authService, usersService, notificationService) {
        this.authService = authService;
        this.usersService = usersService;
        this.notificationService = notificationService;
    }
    async register(createUserDto) {
        const user = await this.usersService.register(createUserDto);
        this.notificationService.createnotification(`${createUserDto.nom, createUserDto.prenom}create avec succes`, "not read yet", 1);
        return user;
    }
    async login(authenticateDto, res) {
        const user = await this.authService.authenticate(authenticateDto);
        await this.notificationService.createnotification(`${authenticateDto.email}login avec succes`, "Non read", 1);
        res.cookie('access_token', user.token, { httpOnly: true, maxAge: 3600000 });
        res.json({ message: 'Login successful' });
        return user;
    }
    async forgetPassword(forgotPasswordDto) {
        if (forgotPasswordDto.newpassword === forgotPasswordDto.confirmPassword) {
            await this.notificationService.createnotification(`${forgotPasswordDto.email} changé password  avec succes`, "No read yet", 1);
            return await this.usersService.changePassword(forgotPasswordDto.email, forgotPasswordDto.newpassword);
        }
        else {
            throw new common_1.NotFoundException('Confirmation du mot de passe échouée.');
        }
    }
    async logout(res) {
        res.clearCookie('access_token');
        await this.notificationService.createnotification(`utilisateur  logout avec succes`, "No read yet", 1);
        res.status(common_1.HttpStatus.OK).json({ message: 'Logout successful' });
    }
    async forgotPassword(forgotPasswordDto) {
        await this.usersService.forgotPassword(forgotPasswordDto.email);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authenticate_dto_1.AuthenticateDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('ChangePassword'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('forgotPassword'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        notification_service_1.NotificationService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map