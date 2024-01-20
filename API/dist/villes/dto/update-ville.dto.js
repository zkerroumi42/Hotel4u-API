"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVilleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ville_dto_1 = require("./create-ville.dto");
class UpdateVilleDto extends (0, mapped_types_1.PartialType)(create_ville_dto_1.CreateVilleDto) {
}
exports.UpdateVilleDto = UpdateVilleDto;
//# sourceMappingURL=update-ville.dto.js.map