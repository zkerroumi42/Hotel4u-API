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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const reservation_entity_1 = require("../reservations/entities/reservation.entity");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async findAll() {
        return await this.commentRepository.find({ relations: ['reservation',], });
    }
    async read(id) {
        return await this.commentRepository.findOne({
            where: { id },
            relations: ['reservation',],
        });
    }
    async create(createCommentlDto) {
        const Commententity = new comment_entity_1.Comment();
        Commententity.comment = createCommentlDto.comment;
        if (createCommentlDto.reservationId) {
            const reservation = new reservation_entity_1.Reservation();
            reservation.id = createCommentlDto.reservationId;
            Commententity.reservation = reservation;
        }
        const comment = this.commentRepository.create(Commententity);
        await this.commentRepository.save(Commententity);
        return comment;
    }
    async update(id, data) {
        const updateData = {};
        if (data.reservationId) {
            const reservation = new reservation_entity_1.Reservation();
            reservation.id = data.reservationId;
            updateData.reservation = reservation;
            delete data.reservationId;
        }
        await this.commentRepository.update({ id }, { ...data, ...updateData });
        const reservation = await this.commentRepository.findOne({ where: { id } });
        return reservation;
    }
    async delete(id) {
        const comment = await this.commentRepository.findOne({ where: { id } });
        await this.commentRepository.delete(comment);
        return comment;
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommentService);
//# sourceMappingURL=comment.service.js.map