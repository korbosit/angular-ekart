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
  // @Input('setBackground') backColor: String = '#36454F';
  // @Input() textColor: string = 'white';
  // @Input() title: String = 'My title';

  @Input('setBackground') changeTextAndBackColor: {
    backColor: string;
    textColor: string;
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.el = el;
    // this.renderer = renderer;
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = '#36454F';
    // this.el.nativeElement.style.color = 'white';

    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.changeTextAndBackColor.backColor
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      this.changeTextAndBackColor.textColor
    );
    // this.renderer.setAttribute(
    //   this.el.nativeElement,
    //   'title',
    //   'This is example title'
    // );
  }
}
