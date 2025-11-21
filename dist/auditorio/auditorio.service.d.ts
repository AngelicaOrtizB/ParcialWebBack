import { UpdateAuditorioDto } from './dto/update-auditorio.dto';
import { Auditorio } from './entities/auditorio.entity';
import { Repository } from 'typeorm';
export declare class AuditorioService {
    private readonly auditorioRepository;
    constructor(auditorioRepository: Repository<Auditorio>);
    crearAuditorio(createAuditorio: Auditorio): Promise<Auditorio>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuditorioDto: UpdateAuditorioDto): string;
    remove(id: number): string;
}
