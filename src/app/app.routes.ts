import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'products',  // Remova a barra inicial
        component: ProductsComponent
    }
];
