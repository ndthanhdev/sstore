import {Component} from "@angular/core";

@Component({
  selector: 'sstore-root',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This app is serving from docker container!!!!';
}
