import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPriority]',
})
export class PriorityDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}
  @Input() set appPriority(priority: string) {
    switch (priority) {
      case 'BAJO':
        this._renderer.setStyle(this._el.nativeElement, 'color', 'green');
        break;
      case 'MEDIO':
        this._renderer.setStyle(this._el.nativeElement, 'color', 'orange');
        break;
      case 'ALTO':
        this._renderer.setStyle(this._el.nativeElement, 'color', 'red');
        break;

      default:
        this._renderer.removeStyle(this._el.nativeElement, 'color');
    }
  }
}
