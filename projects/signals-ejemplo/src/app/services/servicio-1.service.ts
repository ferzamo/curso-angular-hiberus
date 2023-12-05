import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicio1Service {
  count = signal<number>(0);
  object = signal<any>({ completed: false });

  constructor() {}
}
