import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { themeService } from '../ft-theme.service';
import { FitTrackerService } from '../fit-tracker.service';

@Component({
  selector: 'app-fit-header',
  templateUrl: './fit-header.component.html',
  styleUrls: ['./fit-header.component.scss']
})
export class FitHeaderComponent {
  public toggleService = inject(themeService)
  public fitnessService = inject(FitTrackerService)
  @Output() clickToOpenWorkouts = new EventEmitter<void>()
  @Input() public theme!: string;
  toggleTheme(): void {
    this.toggleService.toggleTheme();
  }

  handleClick(): void {
    this.clickToOpenWorkouts.emit()
  }
}
