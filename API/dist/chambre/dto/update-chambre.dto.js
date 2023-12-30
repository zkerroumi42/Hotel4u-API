"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChambreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_chambre_dto_1 = require("./create-chambre.dto");
class UpdateChambreDto extends (0, mapped_types_1.PartialType)(create_chambre_dto_1.CreateChambreDto) {
}
exports.UpdateChambreDto = UpdateChambreDto;
//# sourceMappingURL=update-chambre.dto.js.map