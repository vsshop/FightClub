import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.components';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "", component: MainComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "**", redirectTo: "home" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
