import { NgModule } from "@angular/core";
import { CVComponent } from "./cv.component";
import { CVRoutingModule } from "./cv-routing.module";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
      CVComponent,
    ],
    imports: [
      CommonModule,
      CVRoutingModule
    ],
  })
  export class CVModule {

   }
  