import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FitTrackerComponent } from "./fitness-tracker.component";

const routes: Routes = [
    {
        path: '',
        component: FitTrackerComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class FitTrackerRoutingModule {
    
}