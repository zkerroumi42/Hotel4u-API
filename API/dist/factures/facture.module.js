"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const facture_entity_1 = require("./entities/facture.entity");
const facture_controller_1 = require("./facture.controller");
const facture_service_1 = require("./facture.service");
const payment_entity_1 = require("../payment/entities/payment.entity");
const user_entity_1 = require("../users/entities/user.entity");
let FactureModule = class FactureModule {
};
exports.FactureModule = FactureModule;
exports.FactureModule = FactureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([facture_entity_1.Facture, payment_entity_1.Payment, user_entity_1.User])],
        controllers: [facture_controller_1.FactureController],
        providers: [facture_service_1.FactureService],
    })
], FactureModule);
//# sourceMappingURL=facture.module.js.map