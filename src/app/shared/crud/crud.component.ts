import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import {CrudService} from '../crud.service';
import {CrudfamilleService} from '../crudfamille.service';
import { DataModel } from '../data.model';
import { Principal } from '../principal.model';
import { PrincipalState } from '../principal.state';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
@Input()
title: string;
@Input()
data: any;
@Input()
service: CrudService;
@Input()
initItem: any;
@Input()
initForm: FormGroup;
@Input()
dataModelList: DataModel[];
  crudForm: FormGroup;
 
  operation: string = 'add';
  private principal: Principal;
  selectedItem: any;
  familles: object;
  familles_sous: object;
  addbutton:boolean=false;
  constructor( private store: Store<PrincipalState>,private fb: FormBuilder,private http: HttpClient){
    this.createForm();
  }

  ngOnInit(){
   
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
    })
    this.init();
    
  
   
  }
  showForm(){
    this.addbutton=true;
    console.log(this.addbutton)
  }
  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if ((item.authority === 'ROLE_USER')) {
        hasRole = true;
      }
       if ((item.authority === 'ROLE_ADMIN')) {
        hasRole = false;
      }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN') {
        hasRole = true;
      }
     
    });
    return hasRole;
  }
  createForm(){
    this.initForm ?this.crudForm=this.initForm : this.crudForm = this.fb.group({});
   
  }


 


  loadData(){
    this.service.getAll().subscribe(
      data => {this.data = data;
        let key:any;
    for (key of this.data) {
      if(key.famille)   
      key.famille=key.famille.nom;}
    for (key of this.data) {
      if(key.sousfamille)     
        key.sousfamille=key.sousfamille.nom;
        }  
      },
      error => { console.log('An error was occured.')},
      () => { console.log('loading data was done.')}
      
    );
  }

  add(){
    const p = this.crudForm.value;
   if(p.famille){
    var f=p.famille;
    p.famille={
      "id":f
  };}
  else if(p.sousfamille){
  var sf=p.sousfamille; 
    p.sousfamille={
      "id":sf
  };}
    this.service.add(p).subscribe(
      res => {
        this.addbutton=false;
        this.init();
        this.loadData();
        
      }
    );
  }

  update(){
    
    const p = this.crudForm.value;
    if(p.famille){
      const f=p.famille;
      f.famille={
        "id":f
    };}
    else if(p.sousfamille){
      var sf=p.sousfamille; 
        p.sousfamille={
          "id":sf
      };}
    this.service.update(this.selectedItem)
    .subscribe(
      res => {
        this.addbutton=false;
        this.init();
        this.loadData();
      }
    );
  }

  init(){
    //fetch data for modal (ADD,Edit)
    this.selectedItem = this.initItem;
    this.createForm();
    this.http.get('http://localhost:8080/api/famille').subscribe(
         data => {this.familles=data;},
        error => { console.log('An error was occured.')},
        () => { console.log('loading data was done.')}
        
      );
      this.http.get('http://localhost:8080/api/famille_sous').subscribe(
         data => {this.familles_sous=data;},
        error => { console.log('An error was occured.')},
        () => { console.log('loading data was done.')}
        
      );
  }

  delete(){
    this.service.delete(this.selectedItem.id).
    subscribe(
      res =>{
        this.addbutton=false;
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
  }
}