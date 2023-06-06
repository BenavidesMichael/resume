import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { EXPERIENCE, STUDIES, HOME } from './app-routesNames';

const routes: Routes = [
  { path: HOME, component: IntroComponent },
  { path: STUDIES, component: WorksComponent },
  { path: EXPERIENCE, component: WorksComponent },
  { path: '**',pathMatch: 'full',redirectTo: HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
