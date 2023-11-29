import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TaskCompletedDirective } from './directives/task-completed.directive';
import { PriorityDirective } from './directives/priority.directive';

@NgModule({
  declarations: [
    AppComponent,
    TareaListComponent,
    TaskCompletedDirective,
    PriorityDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
