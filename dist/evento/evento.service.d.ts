import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';
export declare class EventoService {
    private readonly eventoRepository;
    constructor(eventoRepository: Repository<Evento>);
    crearEvento(createEvento: Evento): Promise<Evento>;
    aprobarEvento(id: string): Promise<string>;
    findAll(): string;
    findEventoById(id: string): Promise<Evento>;
    update(id: number, updateEventoDto: UpdateEventoDto): string;
}
