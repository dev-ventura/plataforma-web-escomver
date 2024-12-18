import { Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TolvagoComponent } from './pages/tolvago/tolvago.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    //Rutas de cada una de las secciones del menu
    { path: '', component: HomeComponent},
    { path: 'sobre-nosotros', component: SobreNosotrosComponent}, 
    { path: 'productos', component: ProductosComponent},
    { path: 'tolvago', component: TolvagoComponent},
    { path: 'blog', component: BlogComponent}
];
