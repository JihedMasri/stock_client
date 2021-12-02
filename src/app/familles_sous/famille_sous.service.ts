import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS} from '../config/api.url.config';
import { CrudfamilleSousService } from '../shared/crudfamille_sous.service';
@Injectable({
  providedIn: 'root'
})
export class FamilleSousService implements CrudfamilleSousService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
  return this.http.get(API_URLS.FAMILLES_SOUS_URL);
   
  }

  add(sousfamille): Observable<any>{
    return this.http.post(API_URLS.FAMILLES_SOUS_URL, sousfamille);
  }

  update(sousfamille): Observable<any>{
    return this.http.put(API_URLS.FAMILLES_SOUS_URL, sousfamille);
  }

  delete(id): Observable<any>{
    return this.http.delete(API_URLS.FAMILLES_SOUS_URL + `/${id}`);
  }

  addAll(list): Observable<any>{
    return this.http.post(API_URLS.FAMILLES_SOUS_URL + '/all', list);
  }




}