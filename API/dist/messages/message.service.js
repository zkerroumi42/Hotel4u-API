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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const message_entity_1 = require("./entities/message.entity");
const user_entity_1 = require("../users/entities/user.entity");
let MessageService = class MessageService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async findAll() {
        return await this.messageRepository.find({ relations: ['expediteur', 'destinataire'], });
    }
    async read(id) {
        return await this.messageRepository.findOne({
            where: { id },
            relations: ['expediteur', 'destinataire'],
        });
    }
    async readByExpediteurId(expediteurId) {
        return await this.messageRepository.find({
            where: { expediteur: { id: expediteurId } },
            relations: ['expediteur', 'destinataire'],
        });
    }
    async create(createMessageDto) {
        const messageentity = new message_entity_1.Message();
        messageentity.message = createMessageDto.message;
        messageentity.datetime = createMessageDto.datetime;
        messageentity.status = createMessageDto.status;
        if (createMessageDto.expediteurId) {
            const expediteur = new user_entity_1.User();
            expediteur.id = createMessageDto.expediteurId;
            messageentity.expediteur = expediteur;
        }
        if (createMessageDto.destinataireId) {
            const destinataire = new user_entity_1.User();
            destinataire.id = createMessageDto.destinataireId;
            messageentity.destinataire = destinataire;
        }
        const message = this.messageRepository.create(messageentity);
        await this.messageRepository.save(message);
        return message;
    }
    async update(id, data) {
        const updateData = {};
        if (data.expediteurId) {
            const expediteur = new user_entity_1.User();
            expediteur.id = data.expediteurId;
            updateData.expediteur = expediteur;
            delete data.expediteurId;
        }
        if (data.destinataireId) {
            const destinataire = new user_entity_1.User();
            destinataire.id = data.destinataireId;
            updateData.destinataire = destinataire;
            delete data.destinataireId;
        }
        await this.messageRepository.update({ id }, { ...data, ...updateData });
        const reservation = await this.messageRepository.findOne({ where: { id } });
        return reservation;
    }
    async delete(id) {
        const Message = await this.messageRepository.findOne({ where: { id }, relations: ['destinataire', 'expediteur'] });
        await this.messageRepository.delete(Message);
        return Message;
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MessageService);
//# sourceMappingURL=message.service.js.map