import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './producto.service';
import { ProductosController } from './producto.controller';
import { Producto } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}