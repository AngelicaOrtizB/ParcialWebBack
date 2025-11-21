import { Asistente } from 'src/asistente/entities/asistente.entity';
import { Auditorio } from 'src/auditorio/entities/auditorio.entity';
import { Ponente } from 'src/ponente/entities/ponente.entity';
export declare class Evento {
    id: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    duracion: number;
    estado: string;
    ponente: Ponente;
    asistentes: Asistente[];
    auditorio: Auditorio;
}
