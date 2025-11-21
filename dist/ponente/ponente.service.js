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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonenteService = void 0;
const common_1 = require("@nestjs/common");
const ponente_entity_1 = require("./entities/ponente.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PonenteService = class PonenteService {
    ponenteRepository;
    constructor(ponenteRepository) {
        this.ponenteRepository = ponenteRepository;
    }
    create(createPonenteDto) {
        return 'This action adds a new ponente';
    }
    async crearPonente(createPonente) {
        const tipoPonente = createPonente.tipoPonente;
        const email = createPonente.email;
        if (tipoPonente == "Interno") {
            throw new common_1.BadRequestException("La capacidad debe ser mayor a 0");
        }
    }
    findAll() {
        return `This action returns all ponente`;
    }
    findOne(id) {
        return `This action returns a #${id} ponente`;
    }
    async findPonenteById(id) {
        const ponente = await this.ponenteRepository.findOne({
            where: { id }
        });
        if (!ponente) {
            throw new common_1.BadRequestException("No existe el ponente con este id.");
        }
        return ponente;
    }
    update(id, updatePonenteDto) {
        return `This action updates a #${id} ponente`;
    }
    async eliminarPonente(id) {
        const ponente = await this.ponenteRepository.findOne({
            where: { id }, relations: ["eventos"]
        });
        if (!ponente) {
            throw new common_1.BadRequestException("No existe el ponente con este id, por esta razón no se puede eliminar.");
        }
        const eventos = ponente.eventos;
        if (eventos.length > 0) {
            throw new common_1.BadRequestException("Tiene eventos asociados, por esta razón no se puede eliminar.");
        }
        return await this.ponenteRepository.remove(ponente);
    }
};
exports.PonenteService = PonenteService;
exports.PonenteService = PonenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ponente_entity_1.Ponente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PonenteService);
//# sourceMappingURL=ponente.service.js.map