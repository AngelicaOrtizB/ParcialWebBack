import { PonenteService } from './ponente.service';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
export declare class PonenteController {
    private readonly ponenteService;
    constructor(ponenteService: PonenteService);
    create(createPonenteDto: CreatePonenteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePonenteDto: UpdatePonenteDto): string;
    remove(id: string): Promise<import("./entities/ponente.entity").Ponente>;
}
