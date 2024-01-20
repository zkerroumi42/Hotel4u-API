"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatistiqueModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chambre_service_1 = require("../chambres/chambre.service");
const chambre_entity_1 = require("../chambres/entities/chambre.entity");
const comment_service_1 = require("../comments/comment.service");
const hotel_entity_1 = require("../hotels/entities/hotel.entity");
const hotel_service_1 = require("../hotels/hotel.service");
const reservation_entity_1 = require("../reservations/entities/reservation.entity");
const reservation_service_1 = require("../reservations/reservation.service");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const ville_entity_1 = require("../villes/entities/ville.entity");
const comment_entity_1 = require("../comments/entities/comment.entity");
const ville_service_1 = require("../villes/ville.service");
const statistiques_controller_1 = require("./statistiques.controller");
const email_service_1 = require("../email/email.service");
let StatistiqueModule = class StatistiqueModule {
};
exports.StatistiqueModule = StatistiqueModule;
exports.StatistiqueModule = StatistiqueModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ville_entity_1.Ville, user_entity_1.User, reservation_entity_1.Reservation, chambre_entity_1.Chambre, hotel_entity_1.Hotel, comment_entity_1.Comment])],
        controllers: [statistiques_controller_1.StatistiquesController],
        providers: [ville_service_1.VilleService, users_service_1.UsersService, hotel_service_1.HotelService, chambre_service_1.ChambreService, reservation_service_1.ReservationService, comment_service_1.CommentService, email_service_1.EmailService,],
    })
], StatistiqueModule);
//# sourceMappingURL=statistique.module.js.map