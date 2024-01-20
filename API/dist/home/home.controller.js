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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const reservation_service_1 = require("../reservations/reservation.service");
const hotel_service_1 = require("../hotels/hotel.service");
const comment_service_1 = require("../comments/comment.service");
const users_service_1 = require("../users/users.service");
const create_message_dto_1 = require("../messages/dto/create-message.dto");
const message_service_1 = require("../messages/message.service");
const create_user_dto_1 = require("../users/dto/create.user.dto");
const authenticate_dto_1 = require("../auth/dto/authenticate.dto");
const create_comment_dto_1 = require("../comments/dto/create-comment.dto");
const create_reservation_dto_1 = require("../reservations/dto/create-reservation.dto");
const payment_service_1 = require("../payment/payment.service");
const create_payment_dto_1 = require("../payment/dto/create-payment.dto");
const auth_service_1 = require("../auth/auth.service");
let HomeController = class HomeController {
    constructor(messageService, hotelService, reservationService, commentService, usersService, paymentService, authService) {
        this.messageService = messageService;
        this.hotelService = hotelService;
        this.reservationService = reservationService;
        this.commentService = commentService;
        this.usersService = usersService;
        this.paymentService = paymentService;
        this.authService = authService;
    }
    async getByville(ville) {
        try {
            return await this.hotelService.searchForHotelsInCity(ville);
        }
        catch (error) {
            throw error;
        }
    }
    async getByVilleAndType(ville, type) {
        try {
            return await this.hotelService.searchByVilleAndType(ville, type);
        }
        catch (error) {
            throw error;
        }
    }
    async getByBudget(minBudget, maxBudget) {
        try {
            return await this.hotelService.searchByBudget(minBudget, maxBudget);
        }
        catch (error) {
            throw error;
        }
    }
    create(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
    async getByid(id) {
        return await this.messageService.read(id);
    }
    async readBySourceId(id) {
        try {
            return await this.messageService.readByExpediteurId(id);
        }
        catch (error) {
            throw error;
        }
    }
    async register(createUserDto) {
        return await this.usersService.register(createUserDto);
    }
    async login(authenticateDto) {
        return await this.authService.authenticate(authenticateDto);
    }
    async findAll() {
        return await this.commentService.findAll();
    }
    async getByidd(id) {
        return await this.commentService.read(id);
    }
    async commenter(createCommentDto) {
        return await this.commentService.create(createCommentDto);
    }
    update(id, updateCommentDto) {
        return this.commentService.update(id, updateCommentDto);
    }
    delete(id) {
        return this.commentService.delete(id);
    }
    reserver(createReservationDto) {
        return this.reservationService.create(createReservationDto);
    }
    annuler(id) {
        return this.reservationService.delete(id);
    }
    payer(createPaymentDto) {
        return this.paymentService.create(createPaymentDto);
    }
};
exports.HomeController = HomeController;
__decorate([
    (0, common_1.Get)('search/:ville'),
    __param(0, (0, common_1.Param)('ville')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getByville", null);
__decorate([
    (0, common_1.Get)('search/:ville/:type'),
    __param(0, (0, common_1.Param)('ville')),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getByVilleAndType", null);
__decorate([
    (0, common_1.Get)('search/budget/:minBudget/:maxBudget'),
    __param(0, (0, common_1.Param)('minBudget', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('maxBudget', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getByBudget", null);
__decorate([
    (0, common_1.Post)('messages/envoyer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('recevoir/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getByid", null);
__decorate([
    (0, common_1.Get)('resevoir/user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "readBySourceId", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authenticate_dto_1.AuthenticateDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('Comments/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('comments/read/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getByidd", null);
__decorate([
    (0, common_1.Post)('comments/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "commenter", null);
__decorate([
    (0, common_1.Patch)('comments/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('comments/delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('reservation/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "reserver", null);
__decorate([
    (0, common_1.Delete)('reservation/annuler/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "annuler", null);
__decorate([
    (0, common_1.Post)('reservation/payer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "payer", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)('api/home'),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        hotel_service_1.HotelService,
        reservation_service_1.ReservationService,
        comment_service_1.CommentService,
        users_service_1.UsersService,
        payment_service_1.PaymentService,
        auth_service_1.AuthService])
], HomeController);
//# sourceMappingURL=home.controller.js.map