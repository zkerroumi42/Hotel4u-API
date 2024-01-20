"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatereservationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_reservation_dto_1 = require("./create-reservation.dto");
class UpdatereservationDto extends (0, mapped_types_1.PartialType)(create_reservation_dto_1.CreateReservationDto) {
}
exports.UpdatereservationDto = UpdatereservationDto;
//# sourceMappingURL=update-reservation.dto.js.map