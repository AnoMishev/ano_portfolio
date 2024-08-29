import { workoutIcons } from "./workout-icons.interface";

export interface WorkoutData {
    title: string;
    calories: number;
    hours: number;
    minutes: number;
    seconds: number;
    type: string;
    coords: {
      lat: number;
      lng: number;
    };
    timestamp: string;
  }
  
export interface Workout {
    title: string;
    calories: number;
    duration: string;
    type: string;
    coords: {
        lat: number;
        lng: number;
    };
    timestamp: string;

}