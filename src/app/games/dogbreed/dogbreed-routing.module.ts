import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogBreedComponent } from "./dogbreed.component";
import { DashBoardComponent } from "./dashboard/dashboard.component";
import { BreedComponent } from "./breed/breed.component";
import { BreedsComponent } from "./breeds/breeds.component";


const routes: Routes = [
    {
        path: '',  // Parent path for dogbreed
        component: DogBreedComponent,  // The layout component
        children: [
          { path: 'breeds', component: BreedsComponent },
          { path: 'dashboard', component: DashBoardComponent },
          { path: 'breed/:id', component: BreedComponent}
        ],
      },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class DogBreedRouter{
    
}