import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HeaderPanelComponent } from './header-panel/header-panel.component'
import { FooterComponent } from './footer/footer.component'
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ModalModule } from 'src/app/modal';

import { MapsModule } from './main/maps.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from 'src/environments/environment';
import { GoogleMapsConfigModule } from 'src/app/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    FooterComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MapsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    ModalModule,
    GoogleMapsConfigModule.forRoot(environment.googleMapApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
