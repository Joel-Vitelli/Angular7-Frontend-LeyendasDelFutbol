//Importamos NgModule para que nos permita convertir esto en un modulo de Angular
import { NgModule } from "@angular/core"; 
//Importamos el modulo de Material, donde iremos teniendo todos los imports que utilizaremos
import {    
    
    MatSelectModule,
    
    
} from "@angular/material";
import {MatDividerModule} from '@angular/material/divider'
import { MatListModule } from "@angular/material/list";


@NgModule({

    imports:[        
        MatSelectModule,
        MatDividerModule,
        MatListModule
    ],
    exports: [    
        MatSelectModule,
        MatDividerModule,
        MatListModule
    ],
    

})

export class MaterialModule{

}