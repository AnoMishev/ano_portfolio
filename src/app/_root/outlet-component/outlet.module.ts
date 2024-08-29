import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { OutletRouter } from "./outlet.router";
import { OutletComponent } from "./outlet.component";

@NgModule({
    declarations: [
        OutletComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent
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
