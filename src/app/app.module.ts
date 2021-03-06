import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
//Być może?
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
//import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

//angular-layout
import { FlexLayoutModule } from '@angular/flex-layout';

//services
import { ResponsiveService } from './services/responsive.service';
import { PotrawyService } from './services/potrawy.service';


//Moje Componenty
import { HomepageComponent } from './homepage/homepage.component';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeDialogComponent,
    FooterComponent,
    MenuComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    //MatExpansionModule,
    MatDialogModule,
    
    //angular-layout
    FlexLayoutModule
  ],
  entryComponents: [HomeDialogComponent],
  providers: [ResponsiveService, PotrawyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
