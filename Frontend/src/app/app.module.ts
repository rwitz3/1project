import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AdminComponent } from './admin/admin.component';
import { TrainerService } from './trainer.service';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from 'src/home/home.component';
import { TrainerPComponent } from './trainer-p/trainer-p.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AuthGuard } from './auth.guard';
import { AuthserviceService } from './authservice.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { RequestComponent } from './request/request.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnrollmentformComponent,
    LoginComponent,
    SignupComponent,
    TrainerProfileComponent,
    AdminComponent,
    HomeComponent,
    TrainerPComponent, 
    EditprofileComponent, RequestComponent,
    
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
     MatIconModule,
    HttpClientModule,
    FormsModule,
    

 
  ],
  providers: [TrainerService,AuthGuard,AuthserviceService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
