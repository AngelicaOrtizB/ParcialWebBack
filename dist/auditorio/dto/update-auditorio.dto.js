"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuditorioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auditorio_dto_1 = require("./create-auditorio.dto");
class UpdateAuditorioDto extends (0, mapped_types_1.PartialType)(create_auditorio_dto_1.CreateAuditorioDto) {
}
exports.UpdateAuditorioDto = UpdateAuditorioDto;
//# sourceMappingURL=update-auditorio.dto.js.map