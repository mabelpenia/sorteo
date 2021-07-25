import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  

    randomOfi(juzgados){
        const min = 1;
        console.log(juzgados , juzgados.length )
        const max = juzgados.length ;
        let numero = Math.floor(Math.random() * (max - min)) + min;
        return numero  ;
    }
}
