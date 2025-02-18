import { Component, inject, OnInit } from "@angular/core";
import { MainService } from "../services/main-service";
import { DogBreed } from "../interfaces/dogbreed.interface";
import { SharedService } from "../services/shared-service";

@Component({
  selector: 'breeds',
  templateUrl: 'breeds.component.html',
  styleUrls: ['breeds.component.scss']
})
export class BreedsComponent implements OnInit {
  private _mainService = inject(MainService);
  public breeds: Array<DogBreed> = [];
  isVisible: boolean = false;
  public sharedService = inject(SharedService);

  ngOnInit(): void {
    // Fetch initial breeds data
    this._mainService.getBreeds().subscribe({
      next: (data: DogBreed[]) => {
        this.breeds = data;
      },
      error: (err: any) => {
        console.log('Error fetching breeds:', err);
      }
    });

    // Subscribe to visibility changes
    this.sharedService.visibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  loadBreeds(): void {
    this._mainService.getBreeds().subscribe(breeds => {
      this.breeds = breeds;
    });
  }

  hideElement(): void {
    this.sharedService.hideElement();
  }

  addDog(name: string, breed: string, age: string): void {
    const AGE = Number(age);
    const newDog: DogBreed = { Name: name, Breed: breed, Age: AGE };
    this._mainService.addDog(newDog).subscribe(() => {
      this.loadBreeds();
      this.hideElement();
    });
  }

  deleteDog(dog: DogBreed): void {
    this.breeds = this.breeds.filter(dogo => dogo !== dog);
    this._mainService.deleteDog(dog).subscribe();
  }
}
