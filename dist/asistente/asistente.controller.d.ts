import { AsistenteService } from './asistente.service';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
export declare class AsistenteController {
    private readonly asistenteService;
    constructor(asistenteService: AsistenteService);
    create(createAsistenteDto: CreateAsistenteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAsistenteDto: UpdateAsistenteDto): string;
    remove(id: string): string;
}
