import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-cart-product',
  template: `
    <div class="row">
      <div class="col-8">

        <div class="row">
          <!--START PRODUCT IMAGE-->
          <div class="col-lg-4 col-12 text-white d-flex align-items-center justify-content-center">
            <img src="http://lorempixel.com/350/350/cats/" alt="cats" class="img-thumbnail">
          </div>
          <!--END PRODUCT IMAGE-->

          <!--START PRODUCT INFO-->
          <div class="col-lg-8 col-12">
            <div class="mb-1">
              <h4 class="lead d-inline-block"><strong>Name: </strong>Kavan Cliffs</h4>
              <button class="btn btn-outline-danger btn-sm float-right">Delete</button>
            </div>

            <div class="mb-2">
              <span class="lead"><strong>Variants:</strong></span>
              <table class="table table-hover">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Color</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Cover</td>
                  <td>Hardcover</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--END PRODUCT INFO-->

        </div>
      </div>
      <div class="col-2">
        <span class="lead">200.000 VND</span>
      </div>

      <div class="col-2">
        <div class="form-group mb-0 row">
          <input type="number" class="form-control col-8" value="5">
        </div>
      </div>
    </div>

    <hr>
  `,
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
