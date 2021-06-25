import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadNavComponent } from './head-nav/head-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BodyComponent } from './body/body.component';
import { FootComponent } from './foot/foot.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HeadNavComponent,
    BodyComponent,
    FootComponent,
    LogInComponent,
    RegisterComponent,
    ContactComponent,
    AddComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    NgbModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatDatepickerModule,

    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
