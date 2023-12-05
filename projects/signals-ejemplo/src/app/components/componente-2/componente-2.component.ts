import { Component } from '@angular/core';
import { Servicio1Service } from '../../services/servicio-1.service';

@Component({
  selector: 'app-componente-2',
  templateUrl: './componente-2.component.html',
  styleUrls: ['./componente-2.component.scss'],
})
export class Componente2Component {
  countComponente2 = this._service.count;
  objectComponente2 = this._service.object;
  constructor(private _service: Servicio1Service) {}
}
