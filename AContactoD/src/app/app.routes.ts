import {Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './components/error-404/error-404.component';
import { ProductoUnoComponent } from './pages/producto-uno/producto-uno.component';


export const routes: Routes =  [
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    { path: 'products', component:ProductsComponent },
    { path: 'products/:id', component:DetalleproductoComponent },
    { path: 'nosotros', component:NosotrosComponent },
    { path: '**', component: Error404Component},
    {path: 'producto/uno', component: ProductoUnoComponent},
    
  ];


  