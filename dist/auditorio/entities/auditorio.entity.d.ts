import { Evento } from 'src/evento/entities/evento.entity';
export declare class Auditorio {
    id: string;
    nombre: string;
    capacidad: number;
    ubicacion: string;
    eventos: Evento[];
}
