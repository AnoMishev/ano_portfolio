import { Component, EventEmitter, inject, Inject, OnInit, Output } from '@angular/core';
import { FitTrackerService } from '../fit-tracker.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkoutData } from '../interfaces/workout-types.interface';

@Component({
  selector: 'app-modal-ctr',
  templateUrl: './modal-ctr.component.html',
  styleUrls: ['./modal-ctr.component.scss']
})
export class ModalCtrComponent implements OnInit {
  public workoutForm!: FormGroup;

  public data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject(MatDialogRef<ModalCtrComponent>)


  ngOnInit(): void {
    this.workoutForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      calories: new FormControl('', [Validators.required]),
      hours: new FormControl(0, [Validators.required, Validators.min(0)]),
      minutes: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(59)]),
      seconds: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(59)]),
      type: new FormControl('cycling', [Validators.required])
    })
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      const formData: WorkoutData = {
        title: this.workoutForm.get('title')?.value ?? '',
        calories: Number(this.workoutForm.get('calories')?.value) || 0,
        hours: Number(this.workoutForm.get('hours')?.value) || 0,
        minutes: Number(this.workoutForm.get('minutes')?.value) || 0,
        seconds: Number(this.workoutForm.get('seconds')?.value) || 0,
        type: this.workoutForm.get('type')?.value ?? 'cycling',
        coords: { lat: this.data.lat, lng: this.data.lng },
        timestamp: new Date().toLocaleDateString()
      };
      this._dialogRef.close({ formData, lat: this.data.lat, lng: this.data.lng });
    }
  }

  cancel(): void {
    this._dialogRef.close();
    this.workoutForm.reset();
  }
}
