import { Component } from '@angular/core';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  title: string = '';
  items = [
    {label: 'Student', icon: 'pi pi-fw pi-pencil'},
    {label: 'Advisor', icon: 'pi pi-fw pi-file'},
  ];

  upper(){
    this.title = this.title.toUpperCase();
  }

}
