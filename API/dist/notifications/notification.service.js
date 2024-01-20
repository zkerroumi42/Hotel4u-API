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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const notification_entity_1 = require("./entities/notification.entity");
const user_entity_1 = require("../users/entities/user.entity");
let NotificationService = class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    async findAll() {
        return await this.notificationRepository.find();
    }
    async read(id) {
        return await this.notificationRepository.findOne({ where: { id, } });
    }
    async create(createNotificationlDto) {
        const Notificationentity = new notification_entity_1.Notification();
        Notificationentity.message = createNotificationlDto.message;
        Notificationentity.status = createNotificationlDto.status;
        const notification = this.notificationRepository.create(Notificationentity);
        await this.notificationRepository.save(Notificationentity);
        return notification;
    }
    async createnotification(message, status, id) {
        const Notificationentity = new notification_entity_1.Notification();
        Notificationentity.message = message;
        Notificationentity.status = status;
        const user = new user_entity_1.User();
        user.id = id;
        Notificationentity.user = user;
        const notification = await this.notificationRepository.create(Notificationentity);
        await this.notificationRepository.save(Notificationentity);
        return notification;
    }
    async createn(createNotificationDto) {
        const Notificationentity = new notification_entity_1.Notification();
        Notificationentity.message = createNotificationDto.message;
        Notificationentity.status = createNotificationDto.status;
        if (createNotificationDto.userId) {
            const user = new user_entity_1.User();
            user.id = createNotificationDto.userId;
            Notificationentity.user = user;
        }
        const notification = await this.notificationRepository.create(Notificationentity);
        await this.notificationRepository.save(Notificationentity);
        return notification;
    }
    async update(id, data) {
        await this.notificationRepository.update({ id }, data);
        const notification = await this.notificationRepository.findOne({ where: { id } });
        return notification;
    }
    async delete(id) {
        const notification = await this.notificationRepository.findOne({ where: { id } });
        await this.notificationRepository.delete(notification);
        return notification;
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NotificationService);
//# sourceMappingURL=notification.service.js.map