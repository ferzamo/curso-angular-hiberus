import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TareaListComponent {
  public tasks: string[] = [];

  constructor(private _cdRef: ChangeDetectorRef) {}

  public addTask(): void {
    this.tasks.push('Hola 1');

    // this._cdRef.markForCheck();
    // this._cdRef.detectChanges();
  }
}
