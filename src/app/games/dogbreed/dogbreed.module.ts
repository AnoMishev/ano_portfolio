import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DogBreedRouter } from "./dogbreed-routing.module";// Correct import name
import { DashBoardComponent } from "./dashboard/dashboard.component";
import { DogBreedComponent } from "./dogbreed.component";
import { BreedComponent } from "./breed/breed.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MainService } from "./services/main-service";
import { BreedsComponent } from "./breeds/breeds.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
      DogBreedComponent,
      DashBoardComponent,
      BreedsComponent,
      BreedComponent
    ],
    imports: [
        RouterModule,
      CommonModule,  // Replacing BrowserModule with CommonModule
      DogBreedRouter,  // Correct routing module
      HttpClientModule,
      FormsModule,
      
    ],
    providers: [MainService],
    exports: []  // No need to export RouterModule here unless used outside
})
export class DogBreedModule { }
