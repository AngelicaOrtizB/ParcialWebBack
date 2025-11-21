"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenteService = void 0;
const common_1 = require("@nestjs/common");
let AsistenteService = class AsistenteService {
    create(createAsistenteDto) {
        return 'This action adds a new asistente';
    }
    findAll() {
        return `This action returns all asistente`;
    }
    findOne(id) {
        return `This action returns a #${id} asistente`;
    }
    update(id, updateAsistenteDto) {
        return `This action updates a #${id} asistente`;
    }
    remove(id) {
        return `This action removes a #${id} asistente`;
    }
};
exports.AsistenteService = AsistenteService;
exports.AsistenteService = AsistenteService = __decorate([
    (0, common_1.Injectable)()
], AsistenteService);
//# sourceMappingURL=asistente.service.js.map