import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
//RUTAS
import { app_routing } from "./app.routes";       
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//SERVICES

import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';
//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


import { FilePickerModule } from  '../assets/file-picker/src/public_api';
//COMPONENTS
import { Component, Inject} from '@angular/core';
 import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
import { TestappComponent } from './components/testapp/testapp.component';
import { AsisomosComponent } from './components/asisomos/asisomos.component';
import { NoseligenComponent } from './components/noseligen/noseligen.component';
import { AsirespondemosComponent } from './components/asirespondemos/asirespondemos.component';
import { AquiestamosComponent } from './components/aquiestamos/aquiestamos.component';
import { EstohacemosComponent } from './components/estohacemos/estohacemos.component';
import { TuequipoComponent } from './components/tuequipo/tuequipo.component';
@NgModule({
  declarations: [
    AppComponent,

    TestappComponent,
    AsisomosComponent,
    NoseligenComponent,
    AsirespondemosComponent,
    AquiestamosComponent,
    EstohacemosComponent,
    TuequipoComponent,
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    FilePickerModule,
     XunkCalendarModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
  entryComponents:[ ],
  providers: [


    DataApiService,
    ScrollTopService,
    UserWService,
   
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
