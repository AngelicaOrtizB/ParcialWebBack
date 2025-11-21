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
exports.AuditorioController = void 0;
const common_1 = require("@nestjs/common");
const auditorio_service_1 = require("./auditorio.service");
const update_auditorio_dto_1 = require("./dto/update-auditorio.dto");
const auditorio_entity_1 = require("./entities/auditorio.entity");
let AuditorioController = class AuditorioController {
    auditorioService;
    constructor(auditorioService) {
        this.auditorioService = auditorioService;
    }
    create(createAuditorioDto) {
        return this.auditorioService.crearAuditorio(createAuditorioDto);
    }
    findAll() {
        return this.auditorioService.findAll();
    }
    findOne(id) {
        return this.auditorioService.findOne(+id);
    }
    update(id, updateAuditorioDto) {
        return this.auditorioService.update(+id, updateAuditorioDto);
    }
    remove(id) {
        return this.auditorioService.remove(+id);
    }
};
exports.AuditorioController = AuditorioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auditorio_entity_1.Auditorio]),
    __metadata("design:returntype", void 0)
], AuditorioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuditorioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditorioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_auditorio_dto_1.UpdateAuditorioDto]),
    __metadata("design:returntype", void 0)
], AuditorioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditorioController.prototype, "remove", null);
exports.AuditorioController = AuditorioController = __decorate([
    (0, common_1.Controller)('auditorio'),
    __metadata("design:paramtypes", [auditorio_service_1.AuditorioService])
], AuditorioController);
//# sourceMappingURL=auditorio.controller.js.map