import {Component} from '@angular/core';

@Component({
  selector: 'frontend-root',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This app is servinasdg from docker container!!!!';
}
