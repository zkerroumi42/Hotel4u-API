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
exports.FactureController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_facture_dto_1 = require("./dto/create-facture.dto");
const facture_service_1 = require("./facture.service");
let FactureController = class FactureController {
    constructor(factureService) {
        this.factureService = factureService;
    }
    async findAll() {
        return await this.factureService.findAll();
    }
    async getByid(id) {
        return await this.factureService.read(id);
    }
    create(createFactureDto) {
        return this.factureService.create(createFactureDto);
    }
    update(id, updateFactureDto) {
        return this.factureService.update(id, updateFactureDto);
    }
    delete(id) {
        return this.factureService.delete(id);
    }
};
exports.FactureController = FactureController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'la liste des factures',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'pas de pages'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FactureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('imprimer:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FactureController.prototype, "getByid", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_facture_dto_1.CreateFactureDto]),
    __metadata("design:returntype", Promise)
], FactureController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_facture_dto_1.CreateFactureDto]),
    __metadata("design:returntype", Promise)
], FactureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FactureController.prototype, "delete", null);
exports.FactureController = FactureController = __decorate([
    (0, common_1.Controller)('api/facture'),
    __metadata("design:paramtypes", [facture_service_1.FactureService])
], FactureController);
//# sourceMappingURL=facture.controller.js.map