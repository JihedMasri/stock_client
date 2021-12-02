import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import {FamilleSousService } from './famille_sous.service';

@Injectable({
  providedIn: 'root'
})
export class FamilleSousResolver implements Resolve<any>{

  constructor(private familleSousService:FamilleSousService){

  }
  resolve(){
    return this.familleSousService.getAll();
  }
}