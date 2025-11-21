"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsistenteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asistente_dto_1 = require("./create-asistente.dto");
class UpdateAsistenteDto extends (0, mapped_types_1.PartialType)(create_asistente_dto_1.CreateAsistenteDto) {
}
exports.UpdateAsistenteDto = UpdateAsistenteDto;
//# sourceMappingURL=update-asistente.dto.js.map