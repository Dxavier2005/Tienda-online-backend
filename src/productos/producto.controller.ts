import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductosService } from './producto.service';
import { CreateproductoDto } from './dto/create-producto.dto';
import { UpdateproductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

    @Post()
    create(@Body() createProductoDto: CreateproductoDto) {
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
    update(@Param('id') id: string, @Body() updateProductoDto: UpdateproductoDto) {
        return this.productosService.update(id, updateProductoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productosService.remove(id);
    }
}