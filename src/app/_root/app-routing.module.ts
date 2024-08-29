// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { OutletComponent } from './outlet-component/outlet.component';
// import { IntroComponent } from './intro/intro.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: OutletComponent
//   },
//   {
//     path: "intro",
//     component: IntroComponent
//   },
//   {
//     path: "cv",
//     loadChildren: () => import('../games/cv/cv.module').then(m => m.CVModule)
//   },
//   {
//     path: "capital-city-game",
//     loadChildren: () => import('../games/capital-game/capital-game.module').then(m => m.CapitalCityModule)
//   },
//   {
//     path: "tic-tac-toe-game",
//     loadChildren: () => import('../games/tic-tac-toe/tic-tac-toe.module').then(m => m.TicTacToeModule)
//   },
//   {
//     path: "fitness-tracker-game",
//     loadChildren: () => import('../games/fit-tracker/fit-tracker.module').then(m => m.FitTrackerModule)
//   },
//   {
//     path: "**",
//     redirectTo: ''
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
