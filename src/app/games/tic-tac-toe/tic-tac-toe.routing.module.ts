import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicTacToeGame } from "./tic-tac-toe.component";

const routes: Routes = [
    {
        path: '',
        component: TicTacToeGame
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class TicTacToeRoutingModule {
    
}