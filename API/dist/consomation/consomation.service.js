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
exports.ConsomationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Consomation_entity_1 = require("./entities/Consomation.entity");
let ConsomationService = class ConsomationService {
    constructor(consomationRepository) {
        this.consomationRepository = consomationRepository;
    }
    async findAll() {
        return await this.consomationRepository.find();
    }
    async read(id) {
        return await this.consomationRepository.findOne({ where: { id, } });
    }
    async create(createvillelDto) {
        const villeentity = new Consomation_entity_1.Consomation();
        villeentity.name = createvillelDto.name;
        const hotel = this.consomationRepository.create(villeentity);
        await this.consomationRepository.save(villeentity);
        return hotel;
    }
    async update(id, data) {
        await this.consomationRepository.update({ id }, data);
        const hotel = await this.consomationRepository.findOne({ where: { id } });
        return hotel;
    }
    async delete(id) {
        const hotel = await this.consomationRepository.findOne({ where: { id } });
        await this.consomationRepository.delete(hotel);
        return hotel;
    }
};
exports.ConsomationService = ConsomationService;
exports.ConsomationService = ConsomationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Consomation_entity_1.Consomation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ConsomationService);
//# sourceMappingURL=consomation.service.js.map