import { Component, inject, OnInit } from "@angular/core";
import { MainService } from "../services/main-service";
import { DogBreed } from "../interfaces/dogbreed.interface";

@Component({
    selector: 'dash-board',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
}) 
export class DashBoardComponent implements OnInit {
    public mainService = inject(MainService)
    public breeds!: Array<DogBreed>;
    ngOnInit(): void {
        this.mainService.getBreeds().subscribe((breeds: Array<DogBreed>) => {
            this.breeds = breeds.slice(1, 5)
        })
    }
}