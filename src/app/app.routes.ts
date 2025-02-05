import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'product',
        component: ProductComponent
    }
];
