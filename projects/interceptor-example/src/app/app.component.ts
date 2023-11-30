import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interceptor-example';

  constructor(private _dataService: DataService) {
    this._dataService.fetchData().subscribe((res) => {
      debugger;
    });
  }
}
