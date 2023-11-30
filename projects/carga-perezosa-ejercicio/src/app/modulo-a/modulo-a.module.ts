import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloARoutingModule } from './modulo-a-routing.module';
import { ComponenteAComponent } from '../componente-a/componente-a.component';

@NgModule({
  declarations: [ComponenteAComponent],
  imports: [CommonModule, ModuloARoutingModule],
})
export class ModuloAModule {}
