import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IntroRouter } from "./intro.router";
import { IntroComponent } from "./intro.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        IntroComponent
    ],
    imports: [
        CommonModule,
        IntroRouter,
        ReactiveFormsModule
        
    ],
  })
  export class IntroModule {

   }
  