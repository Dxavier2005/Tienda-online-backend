import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenesDto } from './dto/create-ordenes.dto';
import { UpdateOrdenesDto } from './dto/update-ordenes.dto';

@Controller('ordenes')
export class OrdenesController {
    constructor(private readonly ordenesService: OrdenesService) {}

    @Post()
    create(@Body() createOrdenesDto: CreateOrdenesDto) {
        return this.ordenesService.create(createOrdenesDto);
    }

    @Get()
    findAll() {
        return this.ordenesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordenesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrdenesDto: UpdateOrdenesDto) {
        return this.ordenesService.update(id, updateOrdenesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordenesService.remove(id);
    }
}