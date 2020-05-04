import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Selected = '';
  Connections = ['s3', 'win', 'Oracle']
  onTypeChange(connection: string) {
    console.log(connection)

  }
}
