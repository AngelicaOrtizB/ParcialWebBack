import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';
import { UpdateAuditorioDto } from './dto/update-auditorio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auditorio } from './entities/auditorio.entity';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class AuditorioService {
  constructor(
      @InjectRepository(Auditorio)
      private readonly auditorioRepository: Repository<Auditorio>,
  ) {}

  async crearAuditorio(createAuditorio: Auditorio) {
    const capacidad = createAuditorio.capacidad;

    if (capacidad <= 0) {
      throw new BadRequestException("La capacidad debe ser mayor a 0");
    }
    const auditorio = this.auditorioRepository.create(createAuditorio);
    await this.auditorioRepository.save(auditorio);
    return auditorio;
  }

  findAll() {
    return `This action returns all auditorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditorio`;
  }

  update(id: number, updateAuditorioDto: UpdateAuditorioDto) {
    return `This action updates a #${id} auditorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditorio`;
  }
}
