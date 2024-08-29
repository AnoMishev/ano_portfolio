import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutletComponent } from './outlet-component/outlet.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../_root/outlet-component/outlet.module').then(m => m.OutletModule)
  },
  {
    path: 'games',
    loadChildren: () => import('../games/games.module').then(m => m.GamesModule)
    },
  {
    path: 'cv',
    loadChildren: () => import('../games/cv/cv.module').then(m => m.CVModule)
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }