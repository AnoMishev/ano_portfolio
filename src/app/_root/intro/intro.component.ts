import { Component, ElementRef, EventEmitter, inject, OnDestroy, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { trailingCursor } from "cursor-effects";


@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
  })
  export class IntroComponent implements OnInit, OnDestroy {

    private _router: Router = inject(Router)
    private _renderer: Renderer2 = inject(Renderer2)
    private _elRef: ElementRef = inject(ElementRef)
    private _cursor: any
    public enter: FormControl = new FormControl(null)
    @ViewChild('input') input!: ElementRef<HTMLInputElement>;
    @ViewChild('button') button!: ElementRef<HTMLButtonElement>;

    public openHome(): void {

      if (this.input && this.enter.value === 'start') {
        console.log('Navigating to /home from input');
        this._router.navigate(['/home']);
      } else if (this.button) {
        console.log('Navigating to /home from button');
        this._router.navigate(['/home']);
      } else {
        console.warn('Neither input nor button found or input value is incorrect');
      }
  
      this._playAudio();
    }
    ngOnInit(): void {

      
    }

    ngOnDestroy(): void {
      if (this._cursor) this._cursor.destroy();
    }

    private _playAudio(): void {
      const audio = new Audio('../../../assets/music/Programming Coding Hacking Designing Music (mp3cut.net).mp3')
      audio.play();
      audio.play().catch(error => {
        console.log('imame eror', error)
      })
    }
  }