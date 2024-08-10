import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortofoleComponent } from './portofole/portofole.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent,title:'Home'},
    {path:'about' , component:AboutComponent,title:'About'},
    {path:'contact' , component:ContactComponent,title:'contact'},
    {path:'myport',component:PortofoleComponent,title:"Portofole" }
];
