import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { LoadComponent } from './modules/base/components/load/load.component';
import { InitGuard } from './modules/base/guards/init.guard';

const routes: Routes = [
  { path: "", component: LoadComponent },
  {
    path: "main", canActivate: [InitGuard],
    loadChildren: () => import('@app/main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [],
  providers: [provideRouter(routes, withViewTransitions(), withComponentInputBinding())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
