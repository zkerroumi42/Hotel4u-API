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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facture = void 0;
const payment_entity_1 = require("../../payment/entities/payment.entity");
const reservation_entity_1 = require("../../reservations/entities/reservation.entity");
const typeorm_1 = require("typeorm");
let Facture = class Facture {
};
exports.Facture = Facture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Facture.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Facture.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => payment_entity_1.Payment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", payment_entity_1.Payment)
], Facture.prototype, "payment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reservation_entity_1.Reservation, (reservation) => reservation.factures),
    __metadata("design:type", reservation_entity_1.Reservation)
], Facture.prototype, "reservation", void 0);
exports.Facture = Facture = __decorate([
    (0, typeorm_1.Entity)()
], Facture);
//# sourceMappingURL=facture.entity.js.map