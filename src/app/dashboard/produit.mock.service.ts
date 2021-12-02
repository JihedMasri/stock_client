import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { CrudService } from '../shared/crud.service';
import { DataService } from '../shared/data.services';

@Injectable()
export class ProduitMockService implements DataService{

  private PRODUITS: Produit[] = [];

  constructor(){
  }

  getAll(): Observable<any>{
    return of(this.PRODUITS);
  }



  addAll(list): Observable<any>{
    return of('success');
  }



}