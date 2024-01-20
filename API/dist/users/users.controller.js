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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create.user.dto");
const notification_service_1 = require("../notifications/notification.service");
const change_password_dto_1 = require("./dto/change-password.dto");
let UsersController = class UsersController {
    constructor(usersService, notificationService) {
        this.usersService = usersService;
        this.notificationService = notificationService;
    }
    async findAll() {
        this.notificationService.createnotification(`lists tout users`, "Non read", 1);
        return this.usersService.findAll();
    }
    async getByid(id) {
        return await this.usersService.read(id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    delete(id) {
        return this.usersService.delete(id);
    }
    async forgetPassword(changePasswordDto) {
        const user = await this.usersService.findOneByEmail(changePasswordDto.email);
        if (changePasswordDto.newpassword === changePasswordDto.confirmPassword) {
            await this.notificationService.createnotification(`${changePasswordDto.email} changé password  avec succes`, "No read yet", user.id);
            return await this.usersService.changePassword(changePasswordDto.email, changePasswordDto.newpassword);
        }
        else {
            throw new common_1.NotFoundException('Confirmation du mot de passe échouée.');
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/profile/read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getByid", null);
__decorate([
    (0, common_1.Patch)('profile/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/profile/delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('profile/changePassword'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "forgetPassword", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        notification_service_1.NotificationService])
], UsersController);
//# sourceMappingURL=users.controller.js.map