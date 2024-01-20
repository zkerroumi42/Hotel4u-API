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
exports.Reservation = void 0;
const chambre_entity_1 = require("../../chambres/entities/chambre.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const facture_entity_1 = require("../../factures/entities/facture.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Reservation = class Reservation {
};
exports.Reservation = Reservation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reservation.prototype, "num_conf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reservation.prototype, "date_arr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reservation.prototype, "date_dep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Reservation.prototype, "date_payer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reservation.prototype, "montant", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Reservation.prototype, "Nb_person", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (client) => client.reservations),
    __metadata("design:type", user_entity_1.User)
], Reservation.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chambre_entity_1.Chambre, (chambre) => chambre.reservationss),
    __metadata("design:type", chambre_entity_1.Chambre)
], Reservation.prototype, "chambre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.reservation),
    __metadata("design:type", Array)
], Reservation.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => facture_entity_1.Facture, (facture) => facture.reservation),
    __metadata("design:type", Array)
], Reservation.prototype, "factures", void 0);
exports.Reservation = Reservation = __decorate([
    (0, typeorm_1.Entity)()
], Reservation);
//# sourceMappingURL=reservation.entity.js.map