import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class MateriaModule { }
