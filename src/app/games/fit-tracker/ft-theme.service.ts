import { ElementRef, inject, Injectable } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FitTrackerService } from "./fit-tracker.service";
import * as L from "leaflet";

@Injectable({
    providedIn: 'root'
})
export class themeService {
    private _toggleThemeSubject$ = new BehaviorSubject<string>('light')
    public theme$ = this._toggleThemeSubject$.asObservable()

    public toggleTheme(): void {
        let currentTheme = this._toggleThemeSubject$.value;
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this._toggleThemeSubject$.next(newTheme)
    }
}