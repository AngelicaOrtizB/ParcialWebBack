import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
export declare class AsistenteService {
    create(createAsistenteDto: CreateAsistenteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAsistenteDto: UpdateAsistenteDto): string;
    remove(id: number): string;
}
