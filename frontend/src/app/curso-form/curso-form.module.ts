import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoFormPageRoutingModule } from './curso-form-routing.module';

import { CursoFormPage } from './curso-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoFormPageRoutingModule
  ],
  declarations: [CursoFormPage]
})
export class CursoFormPageModule {}
