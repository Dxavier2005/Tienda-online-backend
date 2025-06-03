import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-productos.dto';
import { UpdateProductoDto } from './dto/update-productos.dto';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Post()
    create(@Body() createProductoDto: CreateProductoDto) {
        return this.productosService.create(createProductoDto);
    }

    @Get()
    findAll() {
        return this.productosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productosService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
        return this.productosService.update(id, updateProductoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productosService.remove(id);
    }
}