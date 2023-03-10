import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import {NavComponent} from "./components/nav/nav.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "../not-found/not-found.component";

import {MycartComponent} from "./pages/mycart/mycart.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RecoveryComponent} from "./pages/recovery/recovery.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {LayaoutComponent} from "./components/layaout/layaout.component";
import {SwiperModule} from "swiper/angular";
import {SharedModule} from './../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component'



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayaoutComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class WebsiteModule { }
