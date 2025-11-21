import { Evento } from 'src/evento/entities/evento.entity';
export declare class Ponente {
    id: string;
    numeroCedula: number;
    nombre: string;
    email: string;
    tipoPonente: string;
    especialidad: string;
    eventos: Evento[];
}
