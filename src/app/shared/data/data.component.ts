import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DataModel } from '../data.model';
import { DataService } from '../data.services';
import { Principal } from '../principal.model';
import { PrincipalState } from '../principal.state';
import data from './data.json'
import calcul from './calcul.json'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input()
title: string;
@Input()
data: any;
@Input()
service: DataService;
@Input()
initItem: any;
@Input()
dataModelList: DataModel[];
  

  operation: string = 'add';
  private principal: Principal;
  selectedItem: any;
  familles: object;
  familles_sous: any;
  sous: string[] = [];
  constructor( private store: Store<PrincipalState>,private http: HttpClient){
  }

  ngOnInit(){
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
    })
    this.init();
    
  
   
  }
  
  loadData(){
    
    this.service.getAll().subscribe(
      data => {this.data = data;console.log(data);
        let key:any;
    for (key of this.data) {
      if(key.sousfamille)       
        key.sousfamille=key.sousfamille.nom;}
      },
      error => { console.log('An error was occured.')},
      () => { console.log('loading data was done.')}
      
    );
  }

  

1
  init(){
     this.selectedItem = this.initItem;this.sous=[];
     console.log(this.familles_sous)
       this.http.get('http://localhost:8080/api/famille_sous').subscribe(
          data => {
          this.familles_sous=data;let key:any;let count=-1;let count2=0;let obj;
           for (let i = 0; i <= Object.keys(this.familles_sous).length; i++) {
          count2++;
             this.http.get('http://localhost:8080/api/produit/affichersous?sous='+count2).subscribe(data => {
               count++;
              obj={nom:this.familles_sous[i].nom,produits:data};
              this.sous.push(obj);
              });
           }
          },
        error => { console.log('An error was occured.')},
        () => { console.log('loading data was done.')}
        
       );
    this.familles_sous=data;let key:any;let count=-1;let count2=0;let obj;
          for (let i = 0; i <= Object.keys(this.familles_sous).length; i++) {
            count2++;
           
              count++;
              obj={nom:this.familles_sous[i].nom,produits:calcul};
               this.sous.push(obj);
          }; 
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }




}
