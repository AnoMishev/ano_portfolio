import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutletRouter } from "./outlet.router";
import { OutletComponent } from "./outlet.component";

@NgModule({
    declarations: [
        OutletComponent,
    ],
    imports: [
        CommonModule,
        OutletRouter
    ],
    exports: [
        OutletComponent
    ]
})
export class OutletModule { }
