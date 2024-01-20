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
exports.ConsomationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_consomation_dto_1 = require("./dto/create-consomation.dto");
const consomation_service_1 = require("./consomation.service");
let ConsomationController = class ConsomationController {
    constructor(consomationService) {
        this.consomationService = consomationService;
    }
    async findAll() {
        return await this.consomationService.findAll();
    }
    async getByid(id) {
        return await this.consomationService.read(id);
    }
    create(createReservationDto) {
        return this.consomationService.create(createReservationDto);
    }
    update(id, updateReservationDto) {
        return this.consomationService.update(id, updateReservationDto);
    }
    delete(id) {
        return this.consomationService.delete(id);
    }
};
exports.ConsomationController = ConsomationController;
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'la liste des consomations',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'pas de pages'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsomationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsomationController.prototype, "getByid", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consomation_dto_1.CreateConsomationDto]),
    __metadata("design:returntype", Promise)
], ConsomationController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_consomation_dto_1.CreateConsomationDto]),
    __metadata("design:returntype", Promise)
], ConsomationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('annuler/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsomationController.prototype, "delete", null);
exports.ConsomationController = ConsomationController = __decorate([
    (0, common_1.Controller)('api/consomations'),
    __metadata("design:paramtypes", [consomation_service_1.ConsomationService])
], ConsomationController);
//# sourceMappingURL=consomation.controller.js.map