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
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const evento_entity_1 = require("./entities/evento.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EventoService = class EventoService {
    eventoRepository;
    constructor(eventoRepository) {
        this.eventoRepository = eventoRepository;
    }
    async crearEvento(createEvento) {
        const duracion = createEvento.duracion;
        const ponente = createEvento.ponente;
        const descripcion = createEvento.descripcion;
        if (duracion <= 0) {
            throw new common_1.BadRequestException("La duración debe ser positiva");
        }
        if (ponente.tipoPonente == "Invitado") {
            if (descripcion.length < 50) {
                throw new common_1.BadRequestException("Si el ponente es invitado la descripción debe ser mayor a 50 y este no lo presenta");
            }
        }
        const evento = this.eventoRepository.create(createEvento);
        await this.eventoRepository.save(evento);
        return evento;
    }
    async aprobarEvento(id) {
        const evento = await this.eventoRepository.findOne({ where: { id } });
        if (!evento?.auditorio) {
            throw new common_1.BadRequestException("No se puede aprobar no tiene auditorio.");
        }
        evento.estado = "Aprobado";
        return "intento";
    }
    findAll() {
        return `This action returns all evento`;
    }
    async findEventoById(id) {
        const evento = await this.eventoRepository.findOne({ where: { id } });
        if (!evento) {
            throw new common_1.BadRequestException("No existe el evento.");
        }
        return evento;
    }
    update(id, updateEventoDto) {
        return `This action updates a #${id} evento`;
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventoService);
//# sourceMappingURL=evento.service.js.map