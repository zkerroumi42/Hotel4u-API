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
exports.ChambreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const chambre_entity_1 = require("./entities/chambre.entity");
const hotel_entity_1 = require("../hotels/entities/hotel.entity");
let ChambreService = class ChambreService {
    constructor(ChambreRepository) {
        this.ChambreRepository = ChambreRepository;
    }
    async findAll() {
        return await this.ChambreRepository.find();
    }
    async read(id) {
        return await this.ChambreRepository.findOne({ where: { id, } });
    }
    async count() {
        return await this.ChambreRepository.count();
    }
    async create(createChambrelDto) {
        const Chambreentity = new chambre_entity_1.Chambre();
        Chambreentity.type = createChambrelDto.type;
        Chambreentity.Nb_max = createChambrelDto.Nb_max;
        if (createChambrelDto.hotelId) {
            const hotel = new hotel_entity_1.Hotel();
            hotel.id = createChambrelDto.hotelId;
            Chambreentity.hotel = hotel;
        }
        const chambre = this.ChambreRepository.create(Chambreentity);
        await this.ChambreRepository.save(Chambreentity);
        return chambre;
    }
    async update(id, data) {
        await this.ChambreRepository.update({ id }, data);
        const Chambre = await this.ChambreRepository.findOne({ where: { id } });
        return Chambre;
    }
    async delete(id) {
        const Chambre = await this.ChambreRepository.findOne({ where: { id } });
        await this.ChambreRepository.delete(Chambre);
        return Chambre;
    }
};
exports.ChambreService = ChambreService;
exports.ChambreService = ChambreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(chambre_entity_1.Chambre)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ChambreService);
//# sourceMappingURL=chambre.service.js.map