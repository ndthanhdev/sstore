import {Injector, Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GenericService {

  protected readonly ORIGINAL_BASE_URL = 'http://localhost:60510/api';

  protected BASE_URL = this.ORIGINAL_BASE_URL;

  constructor(private http: Http) {
  }

  protected put(options?: RequestOptions, data?: any): Observable<any> {
    return this.http.put(this.BASE_URL, data, this.defaultRequestOptions().merge(options));
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
    let a = resp.json();
    return resp.json();
  }
}
