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
exports.CreateConsomationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateConsomationDto {
}
exports.CreateConsomationDto = CreateConsomationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: 'number',
    }),
    __metadata("design:type", Number)
], CreateConsomationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: 'string',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsomationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: 'number',
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateConsomationDto.prototype, "prix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        type: 'number',
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateConsomationDto.prototype, "clientId", void 0);
//# sourceMappingURL=create-consomation.dto.js.map