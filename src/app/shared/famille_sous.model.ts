import { Famille } from "./famille.model";

export class Famille_Sous{

    constructor( public id?:number,
                 public nom?:string,
                 public famille?:Famille
                ){

    }
}