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
exports.VilleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ville_service_1 = require("./ville.service");
const create_ville_dto_1 = require("./dto/create-ville.dto");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
const jwt_guard_1 = require("../auth/jwt.guard");
const role_guard_1 = require("../auth/role/role.guard");
let VilleController = class VilleController {
    constructor(villelService) {
        this.villelService = villelService;
    }
    async findAll() {
        return await this.villelService.findAll();
    }
    async getByid(id) {
        return await this.villelService.read(id);
    }
    create(createVilleDto) {
        return this.villelService.create(createVilleDto);
    }
    update(id, updatevilleDto) {
        return this.villelService.update(id, updatevilleDto);
    }
    delete(id) {
        return this.villelService.delete(id);
    }
};
exports.VilleController = VilleController;
__decorate([
    (0, roles_decorator_1.Roles)('Admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'la liste des villes',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'pas de pages'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "getByid", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ville_dto_1.CreateVilleDto]),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_ville_dto_1.CreateVilleDto]),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('User'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "delete", null);
exports.VilleController = VilleController = __decorate([
    (0, common_1.Controller)('api/ville'),
    __metadata("design:paramtypes", [ville_service_1.VilleService])
], VilleController);
//# sourceMappingURL=ville.controller.js.map