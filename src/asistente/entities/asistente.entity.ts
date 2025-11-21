import { Evento } from 'src/evento/entities/evento.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Asistente {
    @PrimaryGeneratedColumn('uuid')
        id: string;
    
        @Column('text')
        nombre: string;
    
        @Column('text')
        codigoEstudiante: string;
    
        @Column('text')
        email: string;

        @ManyToOne(() => Evento, (evento) => evento.asistentes)
        evento: Evento;
}
