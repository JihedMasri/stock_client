import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FamilleService } from '../familles/famille.service';

import { ProduitService } from '../produit/produit.service';
import { DataModel } from '../shared/data.model';
import { Famille_Sous } from '../shared/famille_sous.model';
import { Produit } from '../shared/produit.model';
import { UserService } from '../user/user.service';
// import  data from './produit.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  produitsModel: DataModel[];
  produitForm: FormGroup;
  produits: any;
  produit: Produit =new Produit();
  famille_sous:Famille_Sous;

  constructor(private produitService: ProduitService,private familleService: FamilleService, private fb: FormBuilder, private route: ActivatedRoute,private http: HttpClient){
    
  }

  ngOnInit(){
     this.http.get('http://localhost:8080/api/produit').subscribe( 
     
         (data: any) => { 
          
          console.log(JSON.stringify(data));
            let key:any;
               for (key of data) {
       key.sousfamille=key.sousfamille.nom;
      
               }
              this.produits=data;
         },
        error => { console.log('An error was occured.')},
        () => { console.log('loading data was done.')}
       
      );
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: '',
      sousfamille:''
    });

    this.produitsModel = [
    new DataModel('id','ID','number',true,[]),
    new DataModel('ref','Référence','string',false,[]),
    new DataModel('quantite','Quantité','number',false,[]),
    new DataModel('prixUnitaire','Prix Unitaire','number',false,[]),
    new DataModel('sousfamille','SousFamille','sousfamille',false,[])

    ]
  }



}