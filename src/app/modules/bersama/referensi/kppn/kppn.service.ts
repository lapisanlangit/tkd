import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/modules/shared/base/base.service';
import { KPPN } from './kppn';


@Injectable()
export class KPPNService extends BaseService {


  constructor(private http: HttpClient) {
    super();

  }


  public getKPPN(): Observable<KPPN[]> {
    return this.http.get<KPPN[]>(this.URL_ROOT + 'data/kppn/getKPPN')
      .pipe(
        catchError(this.handleError)
      );
  }

  

  public saveKPPN(nilaiSimpan:KPPN): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + 'data/kppn/saveKPPN',nilaiSimpan)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateKPPN(nilaiSimpan:KPPN): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + 'data/kppn/updateKPPN',nilaiSimpan)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteKPPN(nilaiSimpan:any): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + 'data/kppn/deleteKPPN',nilaiSimpan)
      .pipe(
        catchError(this.handleError)
      );
  }

}

