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
const user_entity_1 = require("../users/entities/user.entity");
let ConsomationService = class ConsomationService {
    constructor(consomationRepository) {
        this.consomationRepository = consomationRepository;
    }
    async findAll() {
        return await this.consomationRepository.find({ relations: ['client'] });
    }
    async read(id) {
        return await this.consomationRepository.findOne({ where: { id, }, relations: ['client'] });
    }
    async create(createConsomationDto) {
        const consomationentity = new Consomation_entity_1.Consomation();
        consomationentity.name = createConsomationDto.name;
        consomationentity.prix = createConsomationDto.prix;
        if (createConsomationDto.clientId) {
            const client = new user_entity_1.User();
            client.id = createConsomationDto.clientId;
            consomationentity.client = client;
        }
        const consomation = this.consomationRepository.create(consomationentity);
        await this.consomationRepository.save(consomationentity);
        return consomation;
    }
    async update(id, data) {
        const updateData = {};
        if (data.clientId) {
            const client = new user_entity_1.User();
            client.id = data.clientId;
            updateData.client = client;
            delete data.clientId;
        }
        await this.consomationRepository.update({ id }, { ...data, ...updateData });
        const consomation = await this.consomationRepository.findOne({ where: { id } });
        return consomation;
    }
    async delete(id) {
        const consomation = await this.consomationRepository.findOne({ where: { id }, relations: ['client'] });
        await this.consomationRepository.delete(consomation);
        return consomation;
    }
};
exports.ConsomationService = ConsomationService;
exports.ConsomationService = ConsomationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Consomation_entity_1.Consomation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ConsomationService);
//# sourceMappingURL=consomation.service.js.map