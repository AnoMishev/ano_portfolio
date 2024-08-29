import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CapitalCityGame } from "./capital-game.component";

const routes: Routes = [
    {
        path: '',
        component: CapitalCityGame
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class CapitalCityRoutingModule {
    
}