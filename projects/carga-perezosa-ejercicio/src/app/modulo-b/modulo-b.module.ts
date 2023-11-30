import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloBRoutingModule } from './modulo-b-routing.module';
import { ComponenteBComponent } from '../componente-b/componente-b.component';

@NgModule({
  declarations: [ComponenteBComponent],
  imports: [CommonModule, ModuloBRoutingModule],
})
export class ModuloBModule {}
