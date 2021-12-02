import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { FamilleService } from './famille.service';

@Injectable({
  providedIn: 'root'
})
export class FamilleResolver implements Resolve<any>{

  constructor(private familleService:FamilleService){

  }
  resolve(){
    return this.familleService.getAll();
  }
}