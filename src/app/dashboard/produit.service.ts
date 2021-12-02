import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS} from '../config/api.url.config';
import { CrudService } from '../shared/crud.service';
import { DataService } from '../shared/data.services';

@Injectable()
export class ProduitService implements DataService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
   
    return this.http.get(API_URLS.PRODUITS_URL);
    
  }


  addAll(list): Observable<any>{
    return this.http.post(API_URLS.PRODUITS_URL + '/all', list);
  }




}