import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input()
  Header:String;

  constructor() { }

  ngOnInit() {
  }

}
