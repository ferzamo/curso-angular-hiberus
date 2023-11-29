import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]',
})
export class TaskCompletedDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}
  @Input() set appTaskCompleted(completed: boolean) {
    if (completed) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'text-decoration',
        'line-through'
      );
    } else {
      this._renderer.removeStyle(this._el.nativeElement, 'text-decoration');
    }
  }
}
