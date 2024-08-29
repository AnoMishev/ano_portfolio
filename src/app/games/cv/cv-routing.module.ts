import { Component, NgModule } from "@angular/core";
import { CVComponent } from "./cv.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: CVComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class CVRoutingModule {
    
}