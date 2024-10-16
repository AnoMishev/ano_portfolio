import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapitalCityGame } from "./capital-game/capital-game.component";
import { FitTrackerComponent } from "./fit-tracker/fitness-tracker.component";
import { TicTacToeGame } from "./tic-tac-toe/tic-tac-toe.component";

const routes: Routes = [
    {
        path: 'capital-city',
        loadChildren: () => import('../games/capital-game/capital-game.module').then(m => m.CapitalCityModule)
    },
    {
        path: 'fit-tracker',
        loadChildren: () => import('../games/fit-tracker/fit-tracker.module').then(m => m.FitTrackerModule)
    },
    {
        path: 'tic-tac-toe',
        loadChildren: () => import('../games/tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule)
    },
    {
        path: 'calculator',
        loadChildren: () => import('../games/calculator/calculator.component.module').then(m => m.CalculatorModule)
    },
    {
        path: 'dogbreed',
        loadChildren: () => import('../games/dogbreed/dogbreed.module').then(m => m.DogBreedModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRouter {

}