import { Component, WritableSignal, signal } from '@angular/core';
import { Servicio1Service } from '../../services/servicio-1.service';

@Component({
  selector: 'app-componente-1',
  templateUrl: './componente-1.component.html',
  styleUrls: ['./componente-1.component.scss'],
})
export class Componente1Component {
  countComponente1 = this._service.count;
  objectComponente1 = this._service.object;
  constructor(private _service: Servicio1Service) {}

  setSignal() {
    this._service.count.set(2);
  }
  updateSignal() {
    this._service.count.update((value) => value + 1);
  }
  mutateSignal() {
    this._service.object.mutate((item) => (item.completed = true));
  }
  compute() {}
  send() {}
}
