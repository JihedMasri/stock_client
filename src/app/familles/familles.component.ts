import { Component, OnInit } from '@angular/core';
import { DataModel } from '../shared/data.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Famille } from '../shared/famille.model';
import { FamilleService } from './famille.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-familles',
  templateUrl: './familles.component.html',
  styleUrls: ['./familles.component.css']
})
export class FamillesComponent implements OnInit {

  famillesModel: DataModel[];
  familleForm: FormGroup;
  familles: Famille[];
  famille: Famille =new Famille();


  constructor(private familleService: FamilleService, private fb: FormBuilder, private route: ActivatedRoute,private http: HttpClient){
    
  }
  ngOnInit() {
    this.familles = this.route.snapshot.data.familles;
    this.http.get('http://localhost:8080/api/famille').subscribe(
        data => {this.famille=data;},
        error => { console.log('An error was occured.')},
        () => { console.log('loading data was done.')}
        
       );
    this.familleForm = this.fb.group({
      nom: ['', Validators.required],
    });

    this.famillesModel = [
    new DataModel('id','ID','number',true,[]),
    new DataModel('nom','Nom','string',false,[]),

    ]
  }
 
}