import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoFormPage } from './curso-form.page';

const routes: Routes = [
  {
    path: '',
    component: CursoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoFormPageRoutingModule {}
