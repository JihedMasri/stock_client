import { Component, OnInit } from '@angular/core';
import { DataModel } from '../shared/data.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Famille } from '../shared/famille.model';
import { FamilleSousService } from './famille_sous.service';
import { ActivatedRoute } from '@angular/router';
import { Famille_Sous } from '../shared/famille_sous.model';

@Component({
  selector: 'app-familles',
  templateUrl: './familles_sous.component.html',
  styleUrls: ['./familles_sous.component.css']
})
export class FamillesSousComponent implements OnInit {

  familles_sousModel: DataModel[];
  famille_sousForm: FormGroup;
  sousfamilles: Famille_Sous[];
  famille: Famille ;
  famille_sous: Famille_Sous =new Famille_Sous();


  constructor(private familleSousService: FamilleSousService, private fb: FormBuilder, private route: ActivatedRoute){
    
  }
  ngOnInit() {
    this.sousfamilles = this.route.snapshot.data.familles_sous;
   
    
   let key:any;
    for (key of this.sousfamilles) {
      key.famille=key.famille.nom;

  }
    this.famille_sousForm = this.fb.group({
      nom: ['', Validators.required],
      famille:''
    });

    this.familles_sousModel = [
    new DataModel('id','ID','number',true,[]),
    new DataModel('nom','Nom','string',false,[]),
    new DataModel('famille','Famille','famille',false,[])

    ]
  }
 
}