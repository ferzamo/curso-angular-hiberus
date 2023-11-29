import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.scss'],
})
export class TareaListComponent {
  public tasks: any[] = [
    {
      name: 'Tarea 1',
      state: 'PENDIENTE',
      priority: 'BAJO',
    },
    {
      name: 'Tarea 2',
      state: 'COMPLETADA',
      priority: 'MEDIO',
    },
    {
      name: 'Tarea 3',
      state: 'PENDIENTE',
      priority: 'ALTO',
    },
    {
      name: 'Tarea 4',
      state: 'COMPLETADA',
      priority: 'ALTO',
    },
    {
      name: 'Tarea 5',
      state: 'PENDIENTE',
      priority: 'MEDIO',
    },
    {
      name: 'Tarea 6',
      state: 'COMPLETADA',
      priority: 'BAJO',
    },
  ];
}
