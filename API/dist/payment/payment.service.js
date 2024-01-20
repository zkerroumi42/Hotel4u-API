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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentService = class PaymentService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async findAll() {
        return await this.paymentRepository.find();
    }
    async read(id) {
        return await this.paymentRepository.findOne({ where: { id, } });
    }
    async create(createPaymentlDto) {
        const paymententity = new payment_entity_1.Payment();
        paymententity.type = createPaymentlDto.type;
        const payment = this.paymentRepository.create(paymententity);
        await this.paymentRepository.save(paymententity);
        return payment;
    }
    async update(id, data) {
        await this.paymentRepository.update({ id }, data);
        const payment = await this.paymentRepository.findOne({ where: { id } });
        return payment;
    }
    async delete(id) {
        const payment = await this.paymentRepository.findOne({ where: { id } });
        await this.paymentRepository.delete(payment);
        return payment;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map