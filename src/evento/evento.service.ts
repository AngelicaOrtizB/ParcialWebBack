import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventoService {

  constructor(
        @InjectRepository(Evento)
        private readonly eventoRepository: Repository<Evento>,
    ) {}

  async crearEvento(createEvento: Evento) {
      const duracion = createEvento.duracion;
      const ponente= createEvento.ponente;
      const descripcion= createEvento.descripcion;
  
      if (duracion <=0) {
          throw new BadRequestException("La duración debe ser positiva");
        }
      if (ponente.tipoPonente=="Invitado"){
        if(descripcion.length<50){
          throw new BadRequestException("Si el ponente es invitado la descripción debe ser mayor a 50 y este no lo presenta");
        }
      }
      const evento = this.eventoRepository.create(createEvento);
      await this.eventoRepository.save(evento);
      return evento;
  }


  async aprobarEvento(id: string){
    const evento = await this.eventoRepository.findOne({  where: { id }});
    if (!evento?.auditorio) {
      throw new BadRequestException("No se puede aprobar no tiene auditorio.");
    }
    evento.estado= "Aprobado"
    return "intento";
  } 
  findAll() {
    return `This action returns all evento`;
  }

  async findEventoById(id: string){
    const evento = await this.eventoRepository.findOne({  where: { id }});
    if (!evento) {
      throw new BadRequestException("No existe el evento.");
    }
    return evento;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  /*async eliminarEvento(id: string) {
    const evento = await this.eventoRepository.findOne({ 
    where: { id }
    });
    if (evento?.estado=="Aprobado") {
      throw new BadRequestException("No se puede eliminar.");
    }
    return await this.eventoRepository.remove(evento);
    }*/

}
