import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { Evento } from './entities/evento.entity';
import { Asistente } from 'src/asistente/entities/asistente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EventoController],
  providers: [EventoService],
    imports: [
        TypeOrmModule.forFeature([Asistente, Evento])
      ]
})
export class EventoModule {}
