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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const hotel_entity_1 = require("./entities/hotel.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let HotelService = class HotelService {
    constructor(hotelRepository) {
        this.hotelRepository = hotelRepository;
    }
    async findAll() {
        return await this.hotelRepository.find();
    }
    async read(id) {
        return await this.hotelRepository.findOne({ where: { id, } });
    }
    async create(createHotelDto) {
        const hotelentity = new hotel_entity_1.Hotel();
        hotelentity.name = createHotelDto.name;
        hotelentity.email = createHotelDto.email;
        hotelentity.telephone = createHotelDto.telephone;
        hotelentity.logo = createHotelDto.logo;
        hotelentity.facebook = createHotelDto.facebook;
        hotelentity.instagrame = createHotelDto.instagrame;
        hotelentity.youtube = createHotelDto.youtube;
        hotelentity.longitude = createHotelDto.longitude;
        hotelentity.latitude = createHotelDto.latitude;
        const hotel = this.hotelRepository.create(hotelentity);
        await this.hotelRepository.save(hotelentity);
        return hotel;
    }
    async update(id, data) {
        await this.hotelRepository.update({ id }, data);
        const hotel = await this.hotelRepository.findOne({ where: { id } });
        return hotel;
    }
    async delete(id) {
        const hotel = await this.hotelRepository.findOne({ where: { id } });
        await this.hotelRepository.delete(hotel);
        return hotel;
    }
};
exports.HotelService = HotelService;
exports.HotelService = HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(hotel_entity_1.Hotel)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], HotelService);
//# sourceMappingURL=hotel.service.js.map