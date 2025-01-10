import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isModalOpen = false;
  private bodyMouseMoveListener: (() => void) | null = null;


  constructor(private renderer: Renderer2, private el: ElementRef) {}

  openModal() {
    this.isModalOpen = !this.isModalOpen; // Toggle the modal state
  }

 
  ngOnInit() {
    // Attach the mousemove listener to the body
    this.bodyMouseMoveListener = this.renderer.listen('body', 'mousemove', (event) => this.eyeball(event));
  }

  ngOnDestroy() {
    // Remove the mousemove listener to prevent memory leaks
    if (this.bodyMouseMoveListener) {
      this.bodyMouseMoveListener();
    }
  }

  private eyeball(event: MouseEvent) {
    const eyes = this.el.nativeElement.querySelectorAll('.eye');
    eyes.forEach((eye: HTMLElement) => {
      const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rotate = radian * (180 / Math.PI) * -1 + 270;
      this.renderer.setStyle(eye, 'transform', `rotate(${rotate}deg)`);
    });
  }
}

