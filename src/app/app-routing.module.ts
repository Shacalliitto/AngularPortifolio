import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'sobre', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContatoComponent},
  {path:'project', component:ProjectComponent},
];

@NgModule({
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
