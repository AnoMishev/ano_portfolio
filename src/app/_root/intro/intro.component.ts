import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from "@angular/core";
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

    public openHome(): void {
      if (this.enter.value === 'start') {
      this._router.navigate(['/home'])
      }
      this._playAudio();
    }

    ngOnInit(): void {
      const ROOT_ELEMENT = this._elRef.nativeElement.ownerDocument.documentElement
      this._cursor = trailingCursor({
        element: ROOT_ELEMENT
      })
      
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