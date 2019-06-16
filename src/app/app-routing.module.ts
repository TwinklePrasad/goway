import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallRequestComponent } from './call-request/call-request/call-request.component';
import { ComplaintsComponent } from './complaints/complaints/complaints.component';
import { PaymentRequestComponent } from './payment-request/payment-request/payment-request.component';
import { CouponsComponent } from './coupons/coupons/coupons.component';
import { DriversComponent } from './drivers/drivers/drivers.component';
import { RidersComponent } from './riders/riders/riders.component';
import { PromotionsComponent } from './promotions/promotions/promotions.component';
import { TravelsComponent } from './travels/travels/travels.component';
import { MediaLibraryComponent } from './media-library/media-library/media-library.component';
import { ServicesComponent } from './base-definations/services/services.component';
import { CarsComponent } from './base-definations/cars/cars.component';
import { ComplaintTypeComponent } from './base-definations/complaint-type/complaint-type.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { UserSettingsComponent } from './settings/user-settings/user-settings.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

   {path: '', redirectTo:'admin', pathMatch:'full' },
  { path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  
  {path:'admin',canActivate: [AuthGuard],component:HeaderComponent,
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},                   
{path:'call-request',component:CallRequestComponent},
{path:'complaints',component:ComplaintsComponent},
{path:'payment-request',component:PaymentRequestComponent},
{path:'coupons',component:CouponsComponent},
{path:'drivers',component:DriversComponent},
{path:'riders',component:RidersComponent},
{path:'promotions',component:PromotionsComponent},
{path:'travels',component:TravelsComponent},
{path:'media-library',component:MediaLibraryComponent},
{path:'services',component:ServicesComponent},
{path:'vehicles',component:CarsComponent},
{path:'complaints-type',component:ComplaintTypeComponent},
{path:'general-settings',component:GeneralSettingsComponent},
{path:'user-settings',component:UserSettingsComponent},
{path:'logout',component:LogoutComponent}
  ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [  DashboardComponent,
  CallRequestComponent,
  ComplaintsComponent,
  PaymentRequestComponent,
  CouponsComponent,
  DriversComponent,
  RidersComponent,
  PromotionsComponent,
  TravelsComponent,
  MediaLibraryComponent,
  ServicesComponent,
  CarsComponent,
  ComplaintTypeComponent,
  GeneralSettingsComponent,
  UserSettingsComponent,
  LogoutComponent,RegisterComponent,
  LoginComponent]