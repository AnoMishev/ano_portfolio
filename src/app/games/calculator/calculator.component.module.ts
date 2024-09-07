import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CalculatorComponent } from "./calculator.component";
import { CalculatorRoutingModule } from "./calculator.component-routing.module";
import { CalculatorService } from "./calculator.component.service";

@NgModule({
    declarations: [
      CalculatorComponent
    ],
    imports: [
      CommonModule,
      CalculatorRoutingModule,
      ReactiveFormsModule
    ],
    providers: [
      CalculatorService
    ]
  })
  export class CalculatorModule {

   }