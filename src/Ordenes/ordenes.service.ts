import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './ordenes.entity';
import { CreateOrdenDto } from './dto/create-ordenes.dto';
import { UpdateOrdenDto } from './dto/update-ordenes.dto';

@Injectable()
export class OrdenesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {}

    create(createOrdenDto: CreateOrdenDto) {
        const orden = this.categoryRepository.create(createOrdenDto as any);
        return this.categoryRepository.save(orden);
    }

    findAll() {
        return this.categoryRepository.find();
    }

    findOne(id: string) {
        return this.categoryRepository.findOne({ where: { id } });
    }

    async update(id: string, updateOrdenDto: UpdateOrdenDto) {
        const orden = await this.categoryRepository.findOne({ where: { id } });
        if (!orden) return null;
        Object.assign(orden, updateOrdenDto);
        return this.categoryRepository.save(orden);
    }

    async remove(id: string) {
        const orden = await this.categoryRepository.findOne({ where: { id } });
        if (!orden) return null;
        return this.categoryRepository.remove(orden);
    }
}