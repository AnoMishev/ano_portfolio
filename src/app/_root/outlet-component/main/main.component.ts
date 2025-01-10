import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  audio = new Audio('../../assets/music/hover.wav');

  playSound(): void {
    this.audio.currentTime = 0; // Reset the sound to the start
    this.audio.play();
  }
}
