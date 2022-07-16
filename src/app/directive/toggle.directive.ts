import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  private _shown = false;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = 'Hiện mật khẩu';
    span.addEventListener('click', () => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = 'Ẩn mật khẩu';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = 'Hiện mật khẩu';
    }
  }
}
