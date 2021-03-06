import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';

import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import {HttpClientModule} from '@angular/common/http';
import {Addadminservice} from '../app/services/addadminservice';
import {Chargeservice} from '../app/services/chargeservice';
import {Categoryservice} from '../app/services/categoryservice';
import {Adddoctorservice} from '../app/services/adddoctorservice';

import {Authguard} from '../app/services/authguard';
import {Authservice} from '../app/services/authservice';

import { MaintainceComponent } from './maintaince/maintaince.component';
import { ChargesComponent } from './charges/charges.component';
import { CategoryComponent } from './category/category.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentService } from './services/appointmentService';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    AddAdminComponent,
    CreateAdminComponent,
    MaintainceComponent,
    ChargesComponent,
    CategoryComponent,
    AddDoctorComponent,
    AppointmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Addadminservice,
    Chargeservice,
    Categoryservice,
    Adddoctorservice,
    AppointmentService,
    Authguard,
    Authservice

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
