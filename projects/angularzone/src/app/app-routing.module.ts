import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListComponent } from './tarea-list/tarea-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
