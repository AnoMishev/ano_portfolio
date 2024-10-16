import { Component, inject, OnInit } from "@angular/core";
import { DogBreed } from "../interfaces/dogbreed.interface";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../services/main-service";
import { Location } from "@angular/common";
@Component({
    selector: 'breed-component',
    templateUrl: 'breed.component.html',
    styleUrls: ['breed.component.scss']
})
export class BreedComponent implements OnInit{
    public dog: DogBreed | undefined;
    public route = inject(ActivatedRoute)
    public mainService = inject(MainService)
    public location = inject(Location)

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.mainService.getBreed(id).subscribe((breed) => {
            this.dog = breed;
            console.log(breed)
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        if (this.dog) {
        this.mainService.upDateDog(this.dog).subscribe(() => this.goBack())
        console.log('Dog Name changed')
    }
}

    deleteDog(): void {
        if (this.dog) {
            this.mainService.deleteDog(this.dog).subscribe(() => this.goBack())
            console.log(`Dog breed deleted`)
        }
    }

}