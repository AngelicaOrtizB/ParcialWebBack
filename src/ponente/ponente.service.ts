import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
import { Ponente } from './entities/ponente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PonenteService {

  constructor(
    @InjectRepository(Ponente)
        private readonly ponenteRepository: Repository<Ponente>,
    ) {}
  create(createPonenteDto: CreatePonenteDto) {
    return 'This action adds a new ponente';
  }

  async crearPonente(createPonente: Ponente) {
      const tipoPonente = createPonente.tipoPonente;
      const email= createPonente.email

      if (tipoPonente == "Interno") {

        throw new BadRequestException("La capacidad debe ser mayor a 0");
      }
      /*const auditorio = this.auditorioRepository.create(createAuditorio);
      await this.auditorioRepository.save(auditorio);
      return auditorio;*/
    }

  findAll() {
    return `This action returns all ponente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ponente`;
  }

  async findPonenteById(id: string): Promise<Ponente> {
  const ponente = await this.ponenteRepository.findOne({ 
    where: { id }
  });
  if (!ponente) {
    throw new BadRequestException("No existe el ponente con este id.");
  }
  return ponente;
}

  update(id: number, updatePonenteDto: UpdatePonenteDto) {
    return `This action updates a #${id} ponente`;
  }

  async eliminarPonente(id: string) {
    const ponente = await this.ponenteRepository.findOne({ 
    where: { id }, relations: ["eventos"]
    });
    if (!ponente) {
      throw new BadRequestException("No existe el ponente con este id, por esta razón no se puede eliminar.");
    }
    const eventos= ponente.eventos
    if (eventos.length>0) {
      throw new BadRequestException("Tiene eventos asociados, por esta razón no se puede eliminar.");
    }

    return await this.ponenteRepository.remove(ponente);
  }
}