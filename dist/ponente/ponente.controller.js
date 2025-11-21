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
exports.PonenteController = void 0;
const common_1 = require("@nestjs/common");
const ponente_service_1 = require("./ponente.service");
const create_ponente_dto_1 = require("./dto/create-ponente.dto");
const update_ponente_dto_1 = require("./dto/update-ponente.dto");
let PonenteController = class PonenteController {
    ponenteService;
    constructor(ponenteService) {
        this.ponenteService = ponenteService;
    }
    create(createPonenteDto) {
        return this.ponenteService.create(createPonenteDto);
    }
    findAll() {
        return this.ponenteService.findAll();
    }
    findOne(id) {
        return this.ponenteService.findOne(+id);
    }
    update(id, updatePonenteDto) {
        return this.ponenteService.update(+id, updatePonenteDto);
    }
    remove(id) {
        return this.ponenteService.eliminarPonente(id);
    }
};
exports.PonenteController = PonenteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ponente_dto_1.CreatePonenteDto]),
    __metadata("design:returntype", void 0)
], PonenteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PonenteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PonenteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ponente_dto_1.UpdatePonenteDto]),
    __metadata("design:returntype", void 0)
], PonenteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PonenteController.prototype, "remove", null);
exports.PonenteController = PonenteController = __decorate([
    (0, common_1.Controller)('ponente'),
    __metadata("design:paramtypes", [ponente_service_1.PonenteService])
], PonenteController);
//# sourceMappingURL=ponente.controller.js.map