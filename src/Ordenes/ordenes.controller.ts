import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-ordenes.dto';
import { UpdateOrdenDto } from './dto/update-ordenes.dto';

@Controller('ordenes')
export class OrdenesController {
    constructor(private readonly ordenesService: OrdenesService) {}

    @Post()
    create(@Body() createOrdenDto: CreateOrdenDto) {
        return this.ordenesService.create(createOrdenDto);
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
    update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
        return this.ordenesService.update(id, updateOrdenDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordenesService.remove(id);
    }
}