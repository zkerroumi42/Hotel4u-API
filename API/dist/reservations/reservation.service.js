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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const reservation_entity_1 = require("./entities/reservation.entity");
const user_entity_1 = require("../users/entities/user.entity");
const chambre_entity_1 = require("../chambres/entities/chambre.entity");
let ReservationService = class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async findAll() {
        return await this.reservationRepository.find({ relations: ['client', 'chambre'] });
    }
    async read(id) {
        return await this.reservationRepository.findOne({ where: { id, }, relations: ['client', 'chambre'] });
    }
    async count() {
        return await this.reservationRepository.count();
    }
    async create(createReservationDto) {
        const reservationentity = new reservation_entity_1.Reservation();
        reservationentity.num_conf = createReservationDto.num_conf;
        reservationentity.date_arr = createReservationDto.date_arr;
        reservationentity.date_dep = createReservationDto.date_dep;
        reservationentity.date_payer = createReservationDto.date_payer;
        reservationentity.montant = createReservationDto.montant;
        reservationentity.Nb_person = createReservationDto.Nb_person;
        if (createReservationDto.clientId) {
            const client = new user_entity_1.User();
            client.id = createReservationDto.clientId;
            reservationentity.client = client;
        }
        if (createReservationDto.chambreId) {
            const chambre = new chambre_entity_1.Chambre();
            chambre.id = createReservationDto.chambreId;
            reservationentity.chambre = chambre;
        }
        const reservation = this.reservationRepository.create(reservationentity);
        await this.reservationRepository.save(reservationentity);
        return reservation;
    }
    async update(id, data) {
        const updateData = {};
        if (data.clientId) {
            const client = new user_entity_1.User();
            client.id = data.clientId;
            updateData.client = client;
            delete data.clientId;
        }
        if (data.chambreId) {
            const chambre = new chambre_entity_1.Chambre();
            chambre.id = data.chambreId;
            updateData.chambre = chambre;
            delete data.chambreId;
        }
        await this.reservationRepository.update({ id }, { ...data, ...updateData });
        const reservation = await this.reservationRepository.findOne({ where: { id } });
        return reservation;
    }
    async delete(id) {
        const hotel = await this.reservationRepository.findOne({ where: { id }, relations: ['client', 'chambre'] });
        await this.reservationRepository.delete(hotel);
        return hotel;
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(reservation_entity_1.Reservation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map