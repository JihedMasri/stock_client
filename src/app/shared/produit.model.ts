import { Famille_Sous } from "./famille_sous.model";

export class Produit{

    constructor( public id?:number,
                 public ref?:string,
                public quantite?:number,
                public prixUnitaire?:number,
                public famille_sous?:Famille_Sous){

    }
}