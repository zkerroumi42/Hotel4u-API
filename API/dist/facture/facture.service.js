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
exports.FactureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const facture_entity_1 = require("./entities/facture.entity");
let FactureService = class FactureService {
    constructor(factureRepository) {
        this.factureRepository = factureRepository;
    }
    async findAll() {
        return await this.factureRepository.find();
    }
    async read(id) {
        return await this.factureRepository.findOne({ where: { id, } });
    }
    async create(createvillelDto) {
        const factureentity = new facture_entity_1.Facture();
        factureentity.name = createvillelDto.name;
        const facture = this.factureRepository.create(factureentity);
        await this.factureRepository.save(factureentity);
        return facture;
    }
    async update(id, data) {
        await this.factureRepository.update({ id }, data);
        const facture = await this.factureRepository.findOne({ where: { id } });
        return facture;
    }
    async delete(id) {
        const facture = await this.factureRepository.findOne({ where: { id } });
        await this.factureRepository.delete(facture);
        return facture;
    }
};
exports.FactureService = FactureService;
exports.FactureService = FactureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(facture_entity_1.Facture)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FactureService);
//# sourceMappingURL=facture.service.js.map