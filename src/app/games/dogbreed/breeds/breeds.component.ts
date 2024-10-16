import { ChangeDetectorRef, Component, inject, Input, OnInit } from "@angular/core";
import { MainService } from "../services/main-service";
import { DogBreed } from "../interfaces/dogbreed.interface";


@Component({
    selector: 'dog-breed',
    templateUrl: 'breeds.component.html',
    styleUrls: ['breeds.component.scss']
})
export class BreedsComponent implements OnInit {
    private _mainService = inject(MainService)
    public breeds: Array<DogBreed> = [];
    public test = [5,3,2,1,5,6]
    

    ngOnInit(): void {
        this._mainService.getBreeds().subscribe({
            
            next: (data: DogBreed[]) => {
                this.breeds = data;
            },
            error: (err: any) => {
                console.log('érror fetching breeds:', err)
            }
              })
    }

    loadBreeds(): void {
        this._mainService.getBreeds().subscribe(breeds => {
            this.breeds = breeds;
        })
    }

    addDog(name: string, breed: string, age: string): void {
        const AGE = Number(age);
        const newDog: DogBreed = { Name: name, Breed: breed, Age: AGE};
        this._mainService.addDog(newDog).subscribe(() => {
            this.loadBreeds();
            
        })
    }
    
    deleteDog(dog: DogBreed): void {
        this.breeds = this.breeds.filter(dogo => dogo !== dog)
        this._mainService.deleteDog(dog).subscribe()
    }
}