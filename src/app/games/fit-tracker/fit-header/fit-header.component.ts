import { Component, inject, Input, OnInit } from '@angular/core';
import { themeService } from '../ft-theme.service';

@Component({
  selector: 'app-fit-header',
  templateUrl: './fit-header.component.html',
  styleUrls: ['./fit-header.component.scss']
})
export class FitHeaderComponent {
  public toggleService = inject(themeService)
  @Input() public theme!: string;
  toggleTheme(): void {
    this.toggleService.toggleTheme();
  }
}
