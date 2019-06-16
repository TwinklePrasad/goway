import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriverService } from './drivers/driver.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './settings/user-settings/user.service';
import { TravelService } from './travels/travel.service';
import { RiderService } from './riders/rider.service';
import { PromotionService } from './promotions/promotion.service';
import { CouponService } from './coupons/coupon.service';
import { CompaintTypeService } from './base-definations/complaint-type/compaint-type.service';
import { CarsService } from './base-definations/cars/cars.service';
import { SerService } from './base-definations/services/ser.service';
import { CallRequestService } from './call-request/call-request.service';
import { ComplaintsService } from './complaints/complaints.service';
import { MediaLibraryService } from './media-library/media-library.service';
import { PaymentRequestService } from './payment-request/payment-request.service';
import { GeneralSettingService } from './settings/general-settings/general-setting.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routing,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DriverService,UserService,
    TravelService,RiderService,
    PromotionService,CouponService,
    CompaintTypeService,CarsService,SerService,CallRequestService,
    ComplaintsService,MediaLibraryService,PaymentRequestService,
    GeneralSettingService,AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
