import { Controller, Post, Get, Put,Delete, Res, HttpStatus, Body, Param, NotFoundException} from '@nestjs/common';

import { ProductService } from "./product.service";

import {CreateProductDTO} from './dto/product.dto'
import { IngresoSorteoDTO } from './dto/sorteo.dto'

@Controller('api/product')
export class ProductController {

    constructor(private productService: ProductService) { }
   
    @Post('/create')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO ) {
      console.log('instancia de la clase ', createProductDTO)
        return res.status(HttpStatus.OK).json({
           msj:   'creado'  
         })
    }

    @Get('/algoritmo/:id/:max')
    sorteo1(@Res() res, @Param('id') id: string ,  @Param('max') max: string ) {
      console.log('instancia de la clase ', id, max)
        return res.status(HttpStatus.OK).json({
           msj:   'creado'  
         })
    }

     
    @Put('/algoritmo')
    async sorteo3(@Res() res, @Body() ingresoSorteoDTO: IngresoSorteoDTO ) {
       // console.log(' delito: ', ingresoSorteoDTO.delito)

        const aosSorteables =[{ofi: 45},{ofi: 25}, {ofi: 87}, {ofi: 6},{ofi: 134}, {ofi: 634}]
        const numero = await this.productService.randomOfi(aosSorteables);
        if (numero == undefined) throw new NotFoundException('Area Organizacional no disponible');
        return res.status(HttpStatus.OK).json({ data:aosSorteables[numero - 1] });
       

    }
      
    
}


