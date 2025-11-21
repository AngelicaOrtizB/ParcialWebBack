import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
import { Ponente } from './entities/ponente.entity';
import { Repository } from 'typeorm';
export declare class PonenteService {
    private readonly ponenteRepository;
    constructor(ponenteRepository: Repository<Ponente>);
    create(createPonenteDto: CreatePonenteDto): string;
    crearPonente(createPonente: Ponente): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    findPonenteById(id: string): Promise<Ponente>;
    update(id: number, updatePonenteDto: UpdatePonenteDto): string;
    eliminarPonente(id: string): Promise<Ponente>;
}
