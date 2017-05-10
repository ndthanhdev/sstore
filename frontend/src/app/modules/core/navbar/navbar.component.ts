import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Catalog} from 'app/models/catalog.model';

@Component({
  selector: 'frontend-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() catalogs: Catalog[];
  @Input() itemInCart: number;
  @Input() storeName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
