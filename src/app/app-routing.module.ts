import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LogInComponent } from './log-in/log-in.component';

const routes : Routes = [
  { path: '', component: LogInComponent},
  { path: 'dragAndDrop', component: DragDropComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
