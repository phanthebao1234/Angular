import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './layouts/client/client.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { DemoDirectiveDirective } from '../directive/demo-directive.directive';
import { SearchPipe } from '../pipe/search.pipe';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogsdetailComponent } from './pages/blogsdetail/blogsdetail.component';
import { UserComponent } from './pages/user/user.component';
import { ToggleDirective } from '../directive/toggle.directive';
@NgModule({
  declarations: [
    ClientComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    DetailComponent,
    CartComponent,
    HomeComponent,
    DemoDirectiveDirective,
    SearchPipe,
    BlogsComponent,
    BlogsdetailComponent,
    UserComponent,
    ToggleDirective,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ClientModule { }
