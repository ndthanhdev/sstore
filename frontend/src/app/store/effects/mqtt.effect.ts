/**
 * Created by vunguyenhung on 5/30/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {MqttService} from '../../modules/core/mqtt.service';
import {Observable} from 'rxjs/Observable';


import {Action} from '@ngrx/store';

import * as mqttActions from '../actions/mqtt.action';
import * as layoutActions from '../actions/layout.action';
import {CheckoutProgress} from '../../models/checkout-progress.model';

@Injectable()
export class MqttEffect {

  constructor(private actions$: Actions,
              private mqttService: MqttService) {
  }

  @Effect()
  productGet$: Observable<Action> = this.actions$
    .ofType(mqttActions.ActionTypes.START_PRODUCTS_GET)
    .map(action => action.payload)
    .switchMap(payload => this.mqttService.getProducts(payload.products)
      .concatMap(orders => Observable.from([
        new mqttActions.GetProductsAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.CLOSE_ORDER})
      ])));


}
