import { Module } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioController } from './auditorio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auditorio } from './entities/auditorio.entity';
import { Evento } from 'src/evento/entities/evento.entity';

@Module({
  controllers: [AuditorioController],
  providers: [AuditorioService],
  imports: [
      TypeOrmModule.forFeature([Auditorio, Evento])
    ]
})
export class AuditorioModule {}
