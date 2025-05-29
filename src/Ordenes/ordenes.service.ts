import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './ordenes.entity';
import { CreateOrdenesDto } from './dto/create-ordenes.dto';
import { UpdateOrdenesDto } from './dto/update-ordenes.dto';

@Injectable()
export class OrdenesService {
    constructor(
        @InjectRepository(Orden)
        private readonly ordenRepository: Repository<Orden>,
    ) {}

    create(createOrdenesDto: CreateOrdenesDto) {
        const orden = this.ordenRepository.create(createOrdenesDto);
        return this.ordenRepository.save(orden);
    }

    findAll() {
        return this.ordenRepository.find();
    }

    findOne(id: string) {
        return this.ordenRepository.findOne({ where: { id } });
    }

    async update(id: string, updateOrdenesDto: UpdateOrdenesDto) {
        const orden = await this.ordenRepository.findOne({ where: { id } });
        if (!orden) return null;
        Object.assign(orden, updateOrdenesDto);
        return this.ordenRepository.save(orden);
    }

    async remove(id: string) {
        const orden = await this.ordenRepository.findOne({ where: { id } });
        if (!orden) return null;
        return this.ordenRepository.remove(orden);
    }
}