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
exports.Chambre = void 0;
const hotel_entity_1 = require("../../hotels/entities/hotel.entity");
const reservation_entity_1 = require("../../reservations/entities/reservation.entity");
const typeorm_1 = require("typeorm");
let Chambre = class Chambre {
};
exports.Chambre = Chambre;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chambre.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chambre.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Chambre.prototype, "Nb_max", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_entity_1.Reservation, (reservation) => reservation.chambre),
    __metadata("design:type", Array)
], Chambre.prototype, "reservationss", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hotel_entity_1.Hotel, (hotel) => hotel.chambres),
    __metadata("design:type", hotel_entity_1.Hotel)
], Chambre.prototype, "hotel", void 0);
exports.Chambre = Chambre = __decorate([
    (0, typeorm_1.Entity)()
], Chambre);
//# sourceMappingURL=chambre.entity.js.map