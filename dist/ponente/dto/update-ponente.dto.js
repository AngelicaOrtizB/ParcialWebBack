"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePonenteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ponente_dto_1 = require("./create-ponente.dto");
class UpdatePonenteDto extends (0, mapped_types_1.PartialType)(create_ponente_dto_1.CreatePonenteDto) {
}
exports.UpdatePonenteDto = UpdatePonenteDto;
//# sourceMappingURL=update-ponente.dto.js.map