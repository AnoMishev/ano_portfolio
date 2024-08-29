import { NgModule } from "@angular/core";
import { FitTrackerComponent } from "./fitness-tracker.component";
import { FitTrackerRoutingModule } from "./fit-tracker-routing.module";
import { FitHeaderComponent } from "./fit-header/fit-header.component";
import { FitMainComponent } from "./fit-main/fit-main.component";
import { FitFooterComponent } from "./fit-footer/fit-footer.component";
import { FitAsideComponent } from "./fit-aside/fit-aside.component";
import { ModalCtrComponent } from "./modal-ctr/modal-ctr.component";
import { CommonModule } from "@angular/common";
import { FitTrackerService } from "./fit-tracker.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog"
import { MatIconModule } from "@angular/material/icon"

@NgModule({
    declarations: [
      FitTrackerComponent,
      ModalCtrComponent,
      FitHeaderComponent,
      FitMainComponent,
      FitAsideComponent,
      FitFooterComponent,
    ],
    imports: [
      CommonModule,
      FitTrackerRoutingModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatIconModule
    ],
    providers: [
      FitTrackerService
    ]
  })
  export class FitTrackerModule {

   }
  