import { Injectable } from '@angular/core';
import { Constant } from './servicos/constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

 constructor(private _http: HttpClient) { }

  public getPhotos() : Observable<any>{
   return this._http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PHOTOS) ;
  }

}
