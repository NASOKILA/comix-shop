import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/common/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './components/auth/auth.service';
import { RequesterService } from './app.requester';
import { ComixService } from './components/comix/comix.service';
import { UserService } from './components/user/user.service';
import { CommentsService } from './components/comix/comments.service';
import { OrderService } from './components/order/order.service';
import { ErrorComponent } from './components/common/error/error.component';
import { AngularFontAwesomeModule } from '../../node_modules/angular-font-awesome';
import { FontAwesomeModule } from '../../node_modules/@fortawesome/angular-fontawesome';
import { FormsModule } from '../../node_modules/@angular/forms';
import { CommonModule } from '../../node_modules/@angular/common';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NgxPaginationModule } from '../../node_modules/ngx-pagination';
import { ComixAllComponent } from './components/comix/comix-all/comix-all.component';
import { ComixCreateComponent } from './components/comix/comix-create/comix-create.component';
import { ComixEditComponent } from './components/comix/comix-edit/comix-edit.component';
import { ComixDeleteComponent } from './components/comix/comix-delete/comix-delete.component';
import { ComixDetailsComponent } from './components/comix/comix-details/comix-details.component';
import { OrderFinishComponent } from './components/order/order-finish/order-finish.component';
import { OrderConfirmComponent } from './components/order/order-confirm/order-confirm.component';
import { OrderMyComponent } from './components/order/order-my/order-my.component';
import { OrderAllComponent } from './components/order/order-all/order-all.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { ChangepasswordComponent } from './components/user/changepassword/changepassword.component';
import { UserchangeComponent } from './components/user/userchange/userchange.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserAllComponent } from './components/user/user-all/user-all.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AboutComponent } from './components/common/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent, 
    RegisterComponent,
    ComixAllComponent, 
    ComixCreateComponent, 
    ComixEditComponent, 
    ComixDeleteComponent, 
    ComixDetailsComponent,
    OrderFinishComponent,
    OrderConfirmComponent,
    OrderMyComponent,
    OrderAllComponent,
    OrderDetailsComponent,
    ProfileComponent,
    UserAllComponent,
    UserDetailsComponent,
    UserchangeComponent,
    ChangepasswordComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,    
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    RequesterService,
    ComixService,
    CommentsService,
    UserService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }