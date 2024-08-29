import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Workout } from '../interfaces/workout-types.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fit-aside',
  templateUrl: './fit-aside.component.html',
  styleUrls: ['./fit-aside.component.scss']
})
export class FitAsideComponent {

  @Input() workouts: Array<Workout> = [];
  sortWorkout = new FormControl('');
  public options = [
    { value: 'calories', viewValue: 'Select by calories' },
    { value: 'time', viewValue: 'Select by time' }
  ];
  
  workoutIcons: any = {
    cycling: 'directions_bike',
    running: 'directions_run',
    boxing: 'sports_mma',
    cardio: 'fitness_center'
  };

  constructor(private cdr: ChangeDetectorRef) {}

  onSortChange() {
    const selectedValue = this.sortWorkout.value;
    console.log('Selected Sort Option:', selectedValue);

    // Sort based on the selected criteria
    if (selectedValue === 'calories') {
      this.workouts = this.sortWorkouts(this.workouts);
    } else if (selectedValue === 'time') {
      this.workouts = this.sortTime(this.workouts);
    }

    // Mark for check to ensure Angular detects the changes
    this.cdr.markForCheck();
  }

  sortWorkouts(workouts: Array<Workout>) {
    return workouts.slice().sort((a, b) => b.calories - a.calories);
  }

  sortTime(workouts: Array<Workout>) {
    return workouts.slice().sort((a, b) => {
      const durationA = this.getTotalSeconds(a.duration);
      const durationB = this.getTotalSeconds(b.duration);
      return durationB - durationA;
    });
  }

  getTotalSeconds(duration: string) {
    const [hours, minutes, seconds] = duration.split(' ');
    const hoursNum = parseInt(hours.replace('hours', ''), 10) || 0;
    const minutesNum = parseInt(minutes.replace('min', ''), 10) || 0;
    const secondsNum = parseInt(seconds.replace('sec', ''), 10) || 0;
    return hoursNum * 3600 + minutesNum * 60 + secondsNum;
  }


}
