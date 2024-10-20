import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { HomeComponent } from './Pages/home/home.component';
import { authGuard, loginGuard } from './Guards/auth.guard';


export const routes: Routes = [
    {path:"login",component:LoginComponent,canActivate:[loginGuard]},
    {
        path: '',
        canActivate:[authGuard],
        component: HomeLayoutComponent, 
        children: [
          { path: 'home', component: HomeComponent },
          
        ],
    },
    
];
