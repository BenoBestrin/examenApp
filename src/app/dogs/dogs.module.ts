import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DogsRoutingModule } from './dogs-routing.module';
import { DogsComponent } from './componentes/listar-perros/dogs.component';
import { DogsService } from "./services/dogs.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports:[HttpClientModule],
  providers:[DogsService]
})
export class DogsModule { }
