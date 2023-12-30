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
const chambre_service_1 = require("./chambre.service");
const create_chambre_dto_1 = require("./dto/create-chambre.dto");
const update_chambre_dto_1 = require("./dto/update-chambre.dto");
let ChambreController = class ChambreController {
    constructor(chambreService) {
        this.chambreService = chambreService;
    }
    create(createChambreDto) {
        return this.chambreService.create(createChambreDto);
    }
    findAll() {
        return this.chambreService.findAll();
    }
    findOne(id) {
        return this.chambreService.findOne(+id);
    }
    update(id, updateChambreDto) {
        return this.chambreService.update(+id, updateChambreDto);
    }
    remove(id) {
        return this.chambreService.remove(+id);
    }
};
exports.ChambreController = ChambreController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chambre_dto_1.CreateChambreDto]),
    __metadata("design:returntype", void 0)
], ChambreController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChambreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChambreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chambre_dto_1.UpdateChambreDto]),
    __metadata("design:returntype", void 0)
], ChambreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChambreController.prototype, "remove", null);
exports.ChambreController = ChambreController = __decorate([
    (0, common_1.Controller)('api/chambre'),
    __metadata("design:paramtypes", [chambre_service_1.ChambreService])
], ChambreController);
//# sourceMappingURL=chambre.controller.js.map