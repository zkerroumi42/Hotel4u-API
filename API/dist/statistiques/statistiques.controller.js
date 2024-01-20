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
exports.StatistiquesController = void 0;
const common_1 = require("@nestjs/common");
const ville_service_1 = require("../villes/ville.service");
const reservation_service_1 = require("../reservations/reservation.service");
const hotel_service_1 = require("../hotels/hotel.service");
const comment_service_1 = require("../comments/comment.service");
const users_service_1 = require("../users/users.service");
const chambre_service_1 = require("../chambres/chambre.service");
let StatistiquesController = class StatistiquesController {
    constructor(villeService, hotelService, reservationService, commentService, usersService, chambreService) {
        this.villeService = villeService;
        this.hotelService = hotelService;
        this.reservationService = reservationService;
        this.commentService = commentService;
        this.usersService = usersService;
        this.chambreService = chambreService;
    }
    async statistiques() {
        try {
            const nb_visiteurs = await this.usersService.count();
            const nb_villes = await this.villeService.count();
            const nb_clients = await this.usersService.count();
            const nb_hotels = await this.hotelService.count();
            const comments = await this.commentService.findAll();
            return { nb_villes, nb_clients, nb_visiteurs, nb_hotels, comments };
        }
        catch (error) {
            throw error;
        }
    }
    async statistiquess() {
        try {
            const nb_users = await this.usersService.count();
            const nb_clients = await this.usersService.count();
            const nb_chambres = await this.chambreService.count();
            const nb_reservations = await this.reservationService.count();
            const comments = await this.commentService.findAll();
            return { nb_users, nb_clients, nb_chambres, nb_reservations, comments };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.StatistiquesController = StatistiquesController;
__decorate([
    (0, common_1.Get)('Admin/Statistiques'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatistiquesController.prototype, "statistiques", null);
__decorate([
    (0, common_1.Get)('Geran/Statistiques'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatistiquesController.prototype, "statistiquess", null);
exports.StatistiquesController = StatistiquesController = __decorate([
    (0, common_1.Controller)('api/dashbord'),
    __metadata("design:paramtypes", [ville_service_1.VilleService,
        hotel_service_1.HotelService,
        reservation_service_1.ReservationService,
        comment_service_1.CommentService,
        users_service_1.UsersService,
        chambre_service_1.ChambreService])
], StatistiquesController);
//# sourceMappingURL=statistiques.controller.js.map