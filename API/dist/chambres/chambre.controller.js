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
exports.ChambreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const chambre_service_1 = require("./chambre.service");
const create_chambre_dto_1 = require("./dto/create-chambre.dto");
let ChambreController = class ChambreController {
    constructor(chambreService) {
        this.chambreService = chambreService;
    }
    async findAll() {
        return await this.chambreService.findAll();
    }
    async getByid(id) {
        return await this.chambreService.read(id);
    }
    create(createChambreDto) {
        return this.chambreService.create(createChambreDto);
    }
    update(id, updateChambreDto) {
        return this.chambreService.update(id, updateChambreDto);
    }
    delete(id) {
        return this.chambreService.delete(id);
    }
};
exports.ChambreController = ChambreController;
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'la liste des chambre',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'pas de pages'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChambreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChambreController.prototype, "getByid", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chambre_dto_1.CreateChambreDto]),
    __metadata("design:returntype", Promise)
], ChambreController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_chambre_dto_1.CreateChambreDto]),
    __metadata("design:returntype", Promise)
], ChambreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChambreController.prototype, "delete", null);
exports.ChambreController = ChambreController = __decorate([
    (0, common_1.Controller)('api/chambres'),
    __metadata("design:paramtypes", [chambre_service_1.ChambreService])
], ChambreController);
//# sourceMappingURL=chambre.controller.js.map