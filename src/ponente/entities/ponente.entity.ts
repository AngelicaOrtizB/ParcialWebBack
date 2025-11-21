import { Evento } from 'src/evento/entities/evento.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Ponente {

    @PrimaryGeneratedColumn('uuid')
        id: string;
    
        @Column('int')
        numeroCedula: number;
    
        @Column('text')
        nombre: string;
    
        @Column('text')
        email: string;
    
        @Column('text')
        tipoPonente: string;
    
        @Column('text')
        especialidad: string;

        @OneToMany(() => Evento, (evento) => evento.ponente)
        eventos: Evento[];

}
