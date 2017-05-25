import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'frontend-order-detail',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <span class="d-flex align-items-start">
            <span class="display-3 mr-2">Order: SSORD7520</span>

          <!--START STATE BUTTONS-->
          <!--<button class="btn btn-info btn-sm">Processing</button>-->
          <!--<button class="btn btn-warning btn-sm">Delivering</button>-->
            <button class="btn btn-success btn-sm">Done</button>
          <!--END STATE BUTTONS-->

          <!--<span><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></span>-->
        </span>

        <div>
          <div>
            <span>Vu Nguyen Hung</span>
            <span>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>
            <span> - Fast & nice order Fast & nice orderFast & nice order</span>
          </div>
        </div>

      </div>
    </div>
    <div class="container mb-5">
      <!--START ITEM LIST-->
      <span class="col-12 display-4">
        Items:
    </span>
      <hr>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Variant</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">Product 1</a></td>
          <td>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">color: red</span>
          </td>
          <td>200.000 VND</td>
          <td>2</td>
          <td>400.000 VND</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">Product 1</a></td>
          <td>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">color: red</span>
          </td>
          <td>200.000 VND</td>
          <td>2</td>
          <td>400.000 VND</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">Product 1</a></td>
          <td>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">taste: chocolate</span>
            <span class="badge badge-pill badge-info">taste: chocolate</span>
          </td>
          <td>200.000 VND</td>
          <td>2</td>
          <td>400.000 VND</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">Product 1</a></td>
          <td>
            <span class="badge badge-pill badge-info">color: red</span>
            <span class="badge badge-pill badge-info">taste: chocolate</span>
            <span class="badge badge-pill badge-info">taste: chocolate</span>
          </td>
          <td>200.000 VND</td>
          <td>2</td>
          <td>400.000 VND</td>
        </tr>

        </tbody>
      </table>
      <div class="d-flex justify-content-end mr-5">
        <span class="lead">Subtotal: 1.600.000 VND</span>
      </div>
      <!--END ITEM LIST-->
    </div>
  `,
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  routeId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routeId = params['id'];
    });
  }

}
