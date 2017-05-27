import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Coordinates} from '../../models/coordinates.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */
const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser': 'Browser does not support location services',
  'errors.location.permissionDenied': 'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class GeolocationService {

  public getLocation(): Observable<Coordinates> {

    return Observable.create(observer => {

      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(new Coordinates({
              latitude: position.coords.latitude.toString(),
              longitude: position.coords.longitude.toString(),
              accuracy: position.coords.accuracy
            }));
            observer.complete();
          },
          (error) => {
            switch (error.code) {
              case 1:
                observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                break;
              case 2:
                observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                break;
              case 3:
                observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                break;
            }
          });
      } else {
        observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
      }
    });


  }
}
