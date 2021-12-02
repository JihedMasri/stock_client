import {Injectable} from '@angular/core';
import {Famille} from '../shared/famille.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { CrudfamilleSousService } from '../shared/crudfamille_sous.service';
import { Famille_Sous } from '../shared/famille_sous.model';

@Injectable({
  providedIn: 'root'
})
export class FamilleSousMockService implements CrudfamilleSousService{

  private FAMILLES_SOUS: Famille_Sous[] = [];

  constructor(){
  }

  getAll(): Observable<any>{
    return of(this.FAMILLES_SOUS);
  }

  add(famille_sous): Observable<any>{
    return of('success');
  }

  update(famille_sous): Observable<any>{
    return of('success');
  }

  delete(id): Observable<any>{
    return of('success');
  }


  addAll(list): Observable<any>{
    return of('success');
  }



}