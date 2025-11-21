import { Asistente } from 'src/asistente/entities/asistente.entity';
import { Auditorio } from 'src/auditorio/entities/auditorio.entity';
import { Ponente } from 'src/ponente/entities/ponente.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Evento {
        @PrimaryGeneratedColumn('uuid')
        id: string;
    
        @Column('text')
        titulo: string;
    
        @Column('text')
        descripcion: string;
    
        @Column('date')
        fecha: Date;

        @Column('int')
        duracion: number;

        @Column('text')
        estado: string;

        @ManyToOne(() => Ponente, (ponente) => ponente.eventos)
        ponente: Ponente;

        @OneToMany(() => Asistente, (asistente) => asistente.evento)
        asistentes: Asistente[];

        @ManyToOne(() => Auditorio, (auditorio) => auditorio.eventos)
        auditorio: Auditorio;

}
