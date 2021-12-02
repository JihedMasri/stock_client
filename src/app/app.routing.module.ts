import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { FamillesComponent } from './familles/familles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProduitResolver} from './produit/produit.resolver';
import {FamilleResolver} from './familles/famille.resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { FamilleSousResolver } from './familles_sous/famille_sous.resolver';
import { FamillesSousComponent } from './familles_sous/familles_sous.component';


export const appRoutes: Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},

{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent,
children:[
    {path:'produit',component:ProduitComponent,resolve: {produits: ProduitResolver},outlet:'contentOutlet'},
    {path:'famille',component:FamillesComponent,resolve: {familles: FamilleResolver},outlet:'contentOutlet'},
    {path:'Sousfamille',component:FamillesSousComponent,resolve: {familles_sous: FamilleSousResolver},outlet:'contentOutlet'},
    {path:'dashboard',
    component:DashboardComponent,
    outlet:'contentOutlet'},
    {path:'user',
    component:UserComponent, 
    resolve: {
        users: UserResolver
      },
      outlet:'contentOutlet'}]
}

]
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes,{enableTracing:false})
],
exports:[RouterModule ],
providers: [ProduitResolver,UserResolver]
})
export class AppRoutingModule{

}