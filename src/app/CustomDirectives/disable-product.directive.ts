import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
  standalone: true,
})
export class DisableProductDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set disableProduct(disable: Boolean) {
    if (disable) {
      this.renderer.addClass(
        this.el.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
