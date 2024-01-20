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
const payment_entity_1 = require("../payment/entities/payment.entity");
const user_entity_1 = require("../users/entities/user.entity");
const reservation_entity_1 = require("../reservations/entities/reservation.entity");
let FactureService = class FactureService {
    constructor(factureRepository, PaymentRepository, UserRepository) {
        this.factureRepository = factureRepository;
        this.PaymentRepository = PaymentRepository;
        this.UserRepository = UserRepository;
    }
    async findAll() {
        return await this.factureRepository.find({ relations: ['payment', 'reservation'] });
    }
    async read(id) {
        return await this.factureRepository.findOne({ where: { id, }, relations: ['payment', 'reservation'] });
    }
    async create(createFactureDto) {
        const Factureentity = new facture_entity_1.Facture();
        Factureentity.name = createFactureDto.name;
        if (createFactureDto.paymentId) {
            const payment = new payment_entity_1.Payment();
            payment.id = createFactureDto.paymentId;
            Factureentity.payment = payment;
        }
        if (createFactureDto.reservationId) {
            const reservation = new reservation_entity_1.Reservation();
            reservation.id = createFactureDto.reservationId;
            Factureentity.reservation = reservation;
        }
        const facture = this.factureRepository.create(Factureentity);
        await this.factureRepository.save(Factureentity);
        return facture;
    }
    async update(id, data) {
        const updateData = {};
        if (data.reservationId) {
            const reservation = new reservation_entity_1.Reservation();
            reservation.id = data.reservationId;
            updateData.reservation = reservation;
            delete data.reservationId;
        }
        if (data.paymentId) {
            const payment = new payment_entity_1.Payment();
            payment.id = data.paymentId;
            updateData.payment = payment;
            delete data.paymentId;
        }
        await this.factureRepository.update({ id }, { ...data, ...updateData });
        const facture = await this.factureRepository.findOne({ where: { id } });
        return facture;
    }
    async delete(id) {
        const facture = await this.factureRepository.findOne({ where: { id }, relations: ['payment', 'reservation'] });
        await this.factureRepository.delete(facture);
        return facture;
    }
};
exports.FactureService = FactureService;
exports.FactureService = FactureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(facture_entity_1.Facture)),
    __param(1, (0, typeorm_2.InjectRepository)(payment_entity_1.Payment)),
    __param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], FactureService);
//# sourceMappingURL=facture.service.js.map