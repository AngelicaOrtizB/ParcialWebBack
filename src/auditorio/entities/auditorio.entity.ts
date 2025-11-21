import { Evento } from 'src/evento/entities/evento.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Auditorio {
    @PrimaryGeneratedColumn('uuid')
        id: string;
    
        @Column('text')
        nombre: string;
    
        @Column('int')
        capacidad: number;
    
        @Column('text')
        ubicacion: string;

        @OneToMany(() => Evento, (evento) => evento.auditorio)
        eventos: Evento[];

}
