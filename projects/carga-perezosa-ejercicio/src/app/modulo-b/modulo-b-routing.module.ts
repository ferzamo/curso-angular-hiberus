import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteBComponent } from '../componente-b/componente-b.component';

const routes: Routes = [{ path: '', component: ComponenteBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuloBRoutingModule {}
