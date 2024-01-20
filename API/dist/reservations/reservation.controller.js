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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reservation_service_1 = require("./reservation.service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    async findAll() {
        return await this.reservationService.findAll();
    }
    async getByid(id) {
        return await this.reservationService.read(id);
    }
    create(createReservationDto) {
        return this.reservationService.create(createReservationDto);
    }
    update(id, updateReservationDto) {
        return this.reservationService.update(id, updateReservationDto);
    }
    delete(id) {
        return this.reservationService.delete(id);
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'la liste des reservations',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'pas de pages'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "getByid", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('annuler/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "delete", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)('api/reservations'),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map