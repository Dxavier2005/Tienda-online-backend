import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './productos.entity';
import { CreateProductoDto } from './dto/create-productos.dto';
import { UpdateProductoDto } from './dto/update-productos.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) {}

    create(createProductoDto: CreateProductoDto) {
        const producto = this.productoRepository.create(createProductoDto);
        return this.productoRepository.save(producto);
    }

    findAll() {
        return this.productoRepository.find();
    }

    findOne(id: string) {
        return this.productoRepository.findOne({ where: { id } });
    }

    async update(id: string, updateProductoDto: UpdateProductoDto) {
        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) return null;
        Object.assign(producto, updateProductoDto);
        return this.productoRepository.save(producto);
    }

    async remove(id: string) {
        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) return null;
        return this.productoRepository.remove(producto);
    }
}