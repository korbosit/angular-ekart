import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // export class SetBackground implements OnInit {
  //   private el = ElementRef;
  //   constructor(el: ElementRef) {
  //     this.el = el;
  //   }

  constructor(private el: ElementRef) {}

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.backgroundColor('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.backgroundColor('');
  // }

  // private backgroundColor(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = '#36454F';
    this.el.nativeElement.style.color = 'white';
  }
}
