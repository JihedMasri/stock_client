import {Injectable} from '@angular/core';
import {Famille} from '../shared/famille.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { CrudfamilleService } from '../shared/crudfamille.service';

@Injectable({
  providedIn: 'root'
})
export class FamilleMockService implements CrudfamilleService{

  private FAMILLES: Famille[] = [];

  constructor(){
  }

  getAll(): Observable<any>{
    return of(this.FAMILLES);
  }

  add(famille): Observable<any>{
    return of('success');
  }

  update(famille): Observable<any>{
    return of('success');
  }

  delete(id): Observable<any>{
    return of('success');
  }


  addAll(list): Observable<any>{
    return of('success');
  }



}