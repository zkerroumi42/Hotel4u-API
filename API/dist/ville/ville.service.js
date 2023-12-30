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
exports.VilleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const ville_entity_1 = require("./entities/ville.entity");
let VilleService = class VilleService {
    constructor(villeRepository) {
        this.villeRepository = villeRepository;
    }
    async findAll() {
        return await this.villeRepository.find();
    }
    async read(id) {
        return await this.villeRepository.findOne({ where: { id, } });
    }
    async create(createvillelDto) {
        const villeentity = new ville_entity_1.Ville();
        villeentity.name = createvillelDto.name;
        const hotel = this.villeRepository.create(villeentity);
        await this.villeRepository.save(villeentity);
        return hotel;
    }
    async update(id, data) {
        await this.villeRepository.update({ id }, data);
        const hotel = await this.villeRepository.findOne({ where: { id } });
        return hotel;
    }
    async delete(id) {
        const hotel = await this.villeRepository.findOne({ where: { id } });
        await this.villeRepository.delete(hotel);
        return hotel;
    }
};
exports.VilleService = VilleService;
exports.VilleService = VilleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ville_entity_1.Ville)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VilleService);
//# sourceMappingURL=ville.service.js.map