import { AuditorioService } from './auditorio.service';
import { UpdateAuditorioDto } from './dto/update-auditorio.dto';
import { Auditorio } from './entities/auditorio.entity';
export declare class AuditorioController {
    private readonly auditorioService;
    constructor(auditorioService: AuditorioService);
    create(createAuditorioDto: Auditorio): Promise<Auditorio>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuditorioDto: UpdateAuditorioDto): string;
    remove(id: string): string;
}
