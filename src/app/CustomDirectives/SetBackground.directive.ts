import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private el: ElementRef;
  // private renderer: Renderer2;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.el = el;
    // this.renderer = renderer;
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = '#36454F';
    // this.el.nativeElement.style.color = 'white';

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#36454F');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
    this.renderer.setAttribute(
      this.el.nativeElement,
      'title',
      'This is example title'
    );
  }
}
