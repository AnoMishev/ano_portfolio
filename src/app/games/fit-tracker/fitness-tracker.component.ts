import { Component, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FitTrackerService } from './fit-tracker.service';
import { Workout } from './interfaces/workout-types.interface';
import { themeService } from './ft-theme.service';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fit-tracker',
  templateUrl: './fitness-tracker.component.html',
  styleUrls: ['./fitness-tracker.component.scss']
})
export class FitTrackerComponent implements OnInit, OnDestroy {
  public service = inject(FitTrackerService);
  public toggleService = inject(themeService);
  
  public isWaiting: boolean = false;
  public workouts: Array<Workout> = [];
  private _renderer = inject(Renderer2);
  private _document = inject(DOCUMENT);
  public darkOrLight!: string;

  private subscriptions: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.service.initializeMap();

    // Subscribe to isWaiting observable
    this.subscriptions.add(
      this.service.isWaiting$.subscribe(data => {
        this.isWaiting = data;
      })
    );

    // Subscribe to workouts observable
    this.subscriptions.add(
      this.service.workoutsObservable.subscribe(workouts => {
        this.workouts = workouts;
      })
    );

    // Subscribe to theme observable
    this.subscriptions.add(
      this.toggleService.theme$.subscribe(theme => {
        let body = this._document.body;
        this._renderer.setAttribute(body, 'data-theme', theme);
        this.darkOrLight = theme;
      })
    );
    console.log(this.subscriptions)
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.unsubscribe();
    this.service.resetIsWaiting();
  }

  public handleSubmit(): void {
    console.log('Button clicked');
  }
}
