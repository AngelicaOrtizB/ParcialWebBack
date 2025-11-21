import { EventoService } from './evento.service';
import { Evento } from './entities/evento.entity';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    create(createEventoDto: Evento): Promise<Evento>;
    findAll(): string;
    findOne(id: string): Promise<Evento>;
    aprobarEvento(id: string): Promise<string>;
}
