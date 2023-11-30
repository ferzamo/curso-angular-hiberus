import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from '../componente-a/componente-a.component';

const routes: Routes = [{ path: '', component: ComponenteAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloARoutingModule {}
