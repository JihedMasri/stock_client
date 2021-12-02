import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit.model';
import { DataModel } from '../shared/data.model';
import { Famille } from '../shared/famille.model';
import { FamilleService } from '../familles/famille.service';
import { Famille_Sous } from '../shared/famille_sous.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produitsModel: DataModel[];
  produitForm: FormGroup;
 // produits: Produit[];
  produits: Produit[];
  produit: Produit =new Produit();
  famille_sous:Famille_Sous;
  hidden:boolean;
  down:boolean;
  constructor(private produitService: ProduitService,private familleService: FamilleService, private fb: FormBuilder, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.hidden = true;
    this.down = false;
    this.produits = this.route.snapshot.data.produits;
    let key:any;
    for (key of this.produits) {
      key.sousfamille=key.sousfamille.nom;
  }
  // this.produits.famille=this.produits.famille.id;
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
    new DataModel('sousfamille','SousFamille','sousfamille',false,[]),

    ]
   
  }
  toggleButton() {
    this.hidden = !this.hidden;
    this.down=!this.down;
 }
 
}