import {Injector} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
/**
 * Created by vunguyenhung on 5/13/17.
 */

export class GenericService {

  protected http;
  protected authHttp;

  protected BASE_URL = 'http://127.0.0.1';

  constructor(injector: Injector) {
    this.http = injector.get(Http);
    this.authHttp = injector.get(AuthHttp);
  }

  protected patchWithAuth(options?: RequestOptions, data?: Object | string): Observable<any> {
    return this.authHttp.patch(this.BASE_URL, data, this.defaultRequestOptions().merge(options));
  }

  protected postWithAuth(options?: RequestOptions, data?: Object | string): Observable<any> {
    return this.authHttp.post(this.BASE_URL, data, this.defaultRequestOptions().merge(options));
  }

  protected putWithAuth(options?: RequestOptions, data?: Object | string): Observable<any> {
    return this.authHttp.put(this.BASE_URL, data, this.defaultRequestOptions().merge(options));
  }

  protected deleteWithAuth(options?: RequestOptions): Observable<any> {
    return this.authHttp.delete(this.BASE_URL, this.defaultRequestOptions().merge(options));
  }

  protected getWithAuth(options?: RequestOptions): Observable<any> {
    return this.authHttp.get(this.BASE_URL, this.defaultRequestOptions().merge(options)).map(this.extractData);
  }

  protected post(options?: RequestOptions, data?: Object | string): Observable<any> {
    return this.http.post(this.BASE_URL, data, this.defaultRequestOptions().merge(options));
  }

  protected get(options?: RequestOptions): Observable<any> {
    return this.request(options).map(this.extractData);
  }

  /**
   * Perform request with optional options merged with defaultRequestOptions to server.
   * @param options? optional options, if this is null, then this method will perform getList.
   * @returns Observable has type Response
   */
  protected request(options?: RequestOptions): Observable<Response> {
    return this.http.request(this.BASE_URL, this.defaultRequestOptions().merge(options));
  }

  /**
   * Returns a default RequestOptions instance with default Headers
   */
  protected defaultRequestOptions(): RequestOptions {
    return new RequestOptions({
      headers: this.defaultHeaders()
    });
  }

  /**
   * Returns a default Headers instance
   */
  protected defaultHeaders(): Headers {
    return new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  protected extractData(resp: Response): any {
    return resp.json();
  }
}
