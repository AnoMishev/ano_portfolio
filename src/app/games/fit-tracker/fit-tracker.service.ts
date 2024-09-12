import { ElementRef, Inject, inject, Injectable, Renderer2 } from "@angular/core";
import * as L from "leaflet";
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map } from "rxjs";
import { Workout, WorkoutData } from "./interfaces/workout-types.interface";
import { ModalCtrComponent } from "./modal-ctr/modal-ctr.component";
import { themeService } from "./ft-theme.service";
import { TypeModifier } from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class FitTrackerService {
  public isModalOpened: boolean = false;
  private isWaitingSubject = new BehaviorSubject<boolean>(true);
  public isWaiting$ = this.isWaitingSubject.asObservable();
  public isWaiting: boolean = true;

  private _map: L.Map | undefined;
  private _totalCallsSubject$ = new BehaviorSubject<string | number>(0)
  private _workoutsSubject = new BehaviorSubject<Array<Workout>>(this.loadWorkoutsFromLocalStorage());
  public workoutsObservable = this._workoutsSubject.asObservable();
  private _markers: Array<L.Marker> = [];
  

  public totalCalls = this._totalCallsSubject$.asObservable()

  constructor(private _MAT_DIALOG: MatDialog) {}

  initializeMap() {
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));
  }

  private success(position: GeolocationPosition): void {
    this.isWaiting = false;
    this.isWaitingSubject.next(this.isWaiting);
    const { latitude: lat, longitude: lng } = position.coords;
    this._map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(this._map);

    this._map.on('click', (e: L.LeafletMouseEvent) => this._onMapClick(e));
    this.loadMarkers(this._workoutsSubject.value)
  }

  private _onMapClick(e: L.LeafletMouseEvent): void {
    if (this._map) {
      const { lat, lng } = e.latlng;
      this._openFormModal(lat, lng);
    }
  }

  private _openFormModal(lat: number, lng: number) {
    const dialogRef = this._MAT_DIALOG.open(ModalCtrComponent, {
      panelClass: 'custom-dialog-class',
      data: { lat, lng }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addTo(result.lat, result.lng, result.formData, this._markers, this._map!);
      }
    });
  }

  addTo(lat: number, lng: number, data: WorkoutData, markers: Array<L.Marker>, map: L.Map) {
    const workouts = this._workoutsSubject.value;
    const newWorkout: Workout = {
      title: data.title,
      calories: data.calories,
      duration: `${data.hours} hours ${data.minutes} min ${data.seconds} sec`,
      type: data.type,
      coords: { lat, lng },
      timestamp: new Date().toLocaleDateString()
    };
    
    workouts.push(newWorkout);
    localStorage.setItem('FT-Workouts', JSON.stringify(workouts));
    this._workoutsSubject.next(workouts); // Emit the updated workouts
    this.loadMarkers(workouts)

      let calories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
      this._totalCallsSubject$.next(calories.toString())
      this.getTotalCalories(workouts)
  }

  getTotalCalories(workouts: any[]) {
    let calories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
    this._totalCallsSubject$.next(calories.toString())
  }
 

  private loadMarkers(workouts: Array<Workout>): void {
    const customIcon = L.icon({
      iconUrl: '../../assets/images/marker.png', // URL to your single icon
      iconSize: [38, 38], // Size of the icon
      iconAnchor: [19, 38], // Anchor point of the icon (half of iconSize)
      popupAnchor: [0, -30], // Popup position relative to the icon
  });
    this._markers = workouts.map((workout) => L.marker([workout.coords.lat, workout.coords.lng], { icon: customIcon }).addTo(this._map!));
  }


  private loadWorkoutsFromLocalStorage(): Array<Workout> {
    const workoutsJson = localStorage.getItem('FT-Workouts');
    
    // Parse the workoutsJson safely, with a fallback to an empty array
    const workouts = workoutsJson ? JSON.parse(workoutsJson) : [];
    
    // Call getTotalCalories only when there are valid workouts
    if (workouts.length > 0) {
        this.getTotalCalories(workouts);
    }
    
    return workouts;
}


  resetIsWaiting(): void {
    this.isWaiting = true;
    this.isWaitingSubject.next(this.isWaiting);
  }

  error(error: any) {
    console.error(error);
  }

  workoutIcons = {
    cycling: 'directions_bike',
    running: 'directions_run',
    boxing: 'sports_mma',
    cardio: 'fitness_center'
  };
  

  public updateMapTheme(theme: string): void {
    if (this._map) {
      const tileLayerUrl = theme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'  // Dark theme tiles
        : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';  // Light theme tiles

      // Remove existing tile layers
      this._map.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
          this._map!.removeLayer(layer);
        }
      });

      // Add new tile layer
      L.tileLayer(tileLayerUrl, {
        maxZoom: 20,
        attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(this._map);
    }
  }
}
