import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { SwitchComponent } from './directive/switch/switch/switch.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Directive",component:DirectiveComponent},
  {path:"Switch",component:SwitchComponent},
  {path:"template-driven",component:TemplateDrivenComponent},
  {path:"reactive",component:ReactiveComponent},
  {path:"user-list",component:UserListComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
