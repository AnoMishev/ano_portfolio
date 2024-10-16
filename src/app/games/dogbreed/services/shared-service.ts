import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private _visibility = new BehaviorSubject<boolean>(false);
    public visibility$ = this._visibility.asObservable()


    showElement() { 
        this._visibility.next(true);
    }

    hideElement() {
        this._visibility.next(false);
    }
}