import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  create(@Body() createEventoDto: Evento) {
    return this.eventoService.crearEvento(createEventoDto);
  }

  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findEventoById(id);
  }

  @Patch(':id')
  aprobarEvento(@Param('id') id: string) {
    return this.eventoService.aprobarEvento(id);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.eliminarEvento(id);
  }*/
}
