import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TabMenuModule} from 'primeng/tabmenu';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DragDropModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
