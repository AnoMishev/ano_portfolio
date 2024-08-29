import { NgModule } from "@angular/core";
import { CapitalCityGame } from "./capital-game.component";
import { CapitalCityRoutingModule } from "./capital-game-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CapitalGameService } from "./capital-game.service";
import { CapitalModalComponent } from "./capital-modal/capital-modal.component";

@NgModule({
    declarations: [
      CapitalCityGame,
      CapitalModalComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      CapitalCityRoutingModule,
      ReactiveFormsModule
    ],
    providers: [
      CapitalGameService
    ]
  })
  export class CapitalCityModule {

   }
  