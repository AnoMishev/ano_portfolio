import { NgModule } from "@angular/core";
import { TicTacToeGame } from "./tic-tac-toe.component";
import { TicTacToeRoutingModule } from "./tic-tac-toe.routing.module";
import { CommonModule } from "@angular/common";
import { TicTacModalComponent } from "./modal-component/modal.component";
import { CellComponent } from "./cell/cell.component";
import { TicTacService } from "./tic-tac-toe.service";



@NgModule({
    declarations: [
      TicTacToeGame,
      TicTacModalComponent,
      CellComponent
      
    ],
    imports: [
      CommonModule,
      TicTacToeRoutingModule
    ],
    providers: [
      TicTacService
    ]
  })
  export class TicTacToeModule {

   }
  