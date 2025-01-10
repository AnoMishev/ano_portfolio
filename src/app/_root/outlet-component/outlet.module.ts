import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutletRouter } from "./outlet.router";
import { OutletComponent } from "./outlet.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { LogoComponent } from "./logo/logo.component";
import { EyesComponent } from "./eyes/eyes.component";

@NgModule({
    declarations: [
        OutletComponent,
        MainComponent,
        EyesComponent,
        HeaderComponent,
        LogoComponent
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
