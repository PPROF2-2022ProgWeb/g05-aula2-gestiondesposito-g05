import { BuyProductResolverService } from './buy-product-resolver.service';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { ProductResolveService } from './product-resolve.service';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, 
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'productViewDetails', component: ProductViewDetailsComponent, 
  resolve:{
    product:ProductResolveService
  } },
  { path: 'addNewProduct', component: AddNewProductComponent, canActivate:[AuthGuard], data:{roles:['Admin']},

  resolve:{
    product: ProductResolveService
  }
  },
  { path: 'ShowProductDetails', component: ShowProductDetailsComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'buyProduct', component: BuyProductComponent ,  canActivate:[AuthGuard],data:{roles:['User']},
  resolve:{
    productDetail: BuyProductResolverService
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
