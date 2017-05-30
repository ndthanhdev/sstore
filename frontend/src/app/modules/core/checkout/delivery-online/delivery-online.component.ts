import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GOOGLE_MAPS} from 'app/util/app.constants';
import {Coordinates} from '../../../../models/coordinates.model';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../../store/reducers';
import * as layoutActions from '../../../../store/actions/layout.action';
import * as orderActions from '../../../../store/actions/order.action';

@Component({
  selector: 'frontend-delivery-online',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Delivery Location Information:</h4>
    </div>
    <div class="modal-body">
      <form [formGroup]="deliveryLocationForm">
        <span class="lead mb-2">Please define your location of choice:</span>
        <ngb-accordion [closeOthers]="true" activeIds="static-1">
          <ngb-panel id="location-by-address" title="Location by Address">
            <ng-template ngbPanelContent>
              <div class="form-group">
                <label for="address-input">Address:</label>
                <input type="text" class="form-control" id="address-input" formControlName="address">
              </div>
            </ng-template>
          </ngb-panel>
          <ngb-panel id="location-by-coordinates" title="Location by GPS Coordinates">
            <ng-template ngbPanelContent>
              <small class="text-muted">Drag the marker to specify your location</small>
              <agm-map [latitude]="deliveryCoordinates.latitude" [longitude]="deliveryCoordinates.longitude" [zoom]="zoom">
                <agm-marker
                  [latitude]="deliveryCoordinates.latitude"
                  [longitude]="deliveryCoordinates.longitude"
                  [markerDraggable]="true"
                  (dragEnd)="onDragEnd($event)">
                </agm-marker>
              </agm-map>
              <small>
                <button class="btn btn-link btn-sm pl-0" (click)="onUseCurrentLocation()">Use my current location</button>
              </small>

              <div class="row mt-2">
                <div class="form-group col-6">
                  <label for="latitude-input">Latitude:</label>
                  <input type="text" class="form-control" id="latitude-input" formControlName="latitude">
                </div>

                <div class="form-group col-6">
                  <label for="longitude-input">Longitude:</label>
                  <input type="text" class="form-control" id="longitude-input" formControlName="longitude">
                </div>
              </div>
            </ng-template>
          </ngb-panel>
        </ngb-accordion>

        <div class="form-group"
             [ngClass]="{'has-danger': formGroupHasDanger('tel')}">
          <label for="tel-input">Tel:</label>
          <input type="text" class="form-control" id="tel-input" formControlName="tel">
        </div>

      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-link" (click)="onResetButtonClick()">Reset</button>
      <button class="btn btn-outline-primary" (click)="onDoneButtonClick()" [disabled]="deliveryLocationForm.invalid">Done</button>
    </div>
  `,
  styleUrls: ['./delivery-online.component.scss']
})
export class DeliveryOnlineComponent implements OnInit, OnDestroy {
  deliveryLocationForm: FormGroup;

  deliveryCoordinates: Coordinates;
  deliveryCoordinatesSub: Subscription;

  currentLocation: Coordinates;
  currentLocationSub: Subscription;

  zoom = GOOGLE_MAPS.DEFAULT_ZOOM_LEVEL;

  createdOrderId: number;
  createdOrderIdSub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private store: Store<fromRoot.State>) {
    this.deliveryLocationForm = this.formBuilder.group({
      address: '',
      latitude: GOOGLE_MAPS.HCMC_LOCATION.latitude,
      longitude: GOOGLE_MAPS.HCMC_LOCATION.longitude,
      tel: ['', Validators.required]
    });

    this.deliveryCoordinatesSub = this.store.select(fromRoot.getLayoutDeliveryCoordinates).subscribe(coords => {
      this.deliveryCoordinates = coords;
      this.deliveryLocationForm.patchValue({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    });
    this.currentLocationSub = this.store.select(fromRoot.getLayoutCoordinates).subscribe(coords => this.currentLocation = coords);

    this.createdOrderIdSub = this.store.select(fromRoot.getOrderCreatedOrderId)
      .subscribe(createdOrderId => this.createdOrderId = createdOrderId);
  }

  ngOnInit() {
  }

  private formGroupHasDanger(groupName: string): boolean {
    return !(this.deliveryLocationForm.get(groupName).valid || this.deliveryLocationForm.get(groupName).untouched);
  }

  onUseCurrentLocation() {
    if (this.currentLocation) {
      this.store.dispatch(new layoutActions.SetDeliveryCoordinatesAction({
        deliveryCoordinates: {
          latitude: +this.currentLocation.latitude,
          longitude: +this.currentLocation.longitude
        }
      }));
    } else {
      this.store.dispatch(new layoutActions.StartCoordinatesGetAction());
    }
  }

  onResetButtonClick() {
    this.deliveryLocationForm.reset();
  }


  onDoneButtonClick() {
    this.store.dispatch(new orderActions.StartOrderDeliveringOnlineAction({
      orderId: this.createdOrderId,
      address: this.deliveryLocationForm.get('address').value,
      latitude: this.deliveryLocationForm.get('latitude').value,
      longitude: this.deliveryLocationForm.get('longitude').value,
      tel: this.deliveryLocationForm.get('tel').value
    }));
    this.store.dispatch(new layoutActions.SetCheckoutDoneMsgAction({doneMsg: 'Your order is being delivered!'}));
  }

  onDragEnd($event) {
    this.store.dispatch(new layoutActions.SetDeliveryCoordinatesAction({
      deliveryCoordinates: {
        latitude: +$event.coords.lat,
        longitude: +$event.coords.lng
      }
    }));
  }

  ngOnDestroy(): void {
    this.currentLocationSub.unsubscribe();
    this.deliveryCoordinatesSub.unsubscribe();
    this.createdOrderIdSub.unsubscribe();
  }
}
