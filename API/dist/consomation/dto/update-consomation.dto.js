"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsomationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_consomation_dto_1 = require("./create-consomation.dto");
class UpdateConsomationDto extends (0, mapped_types_1.PartialType)(create_consomation_dto_1.CreateConsomationDto) {
}
exports.UpdateConsomationDto = UpdateConsomationDto;
//# sourceMappingURL=update-consomation.dto.js.map