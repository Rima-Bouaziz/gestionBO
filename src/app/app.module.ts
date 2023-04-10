import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DocumentComponent } from './pages/document/document.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDocumentComponent } from './pages/add-document/add-document.component';
import { EtatComponent } from './pages/etat/etat.component';
import { AddetatComponent } from './pages/add-etat/add-etat.component';
import { ReviwerComponent } from './pages/reviwer/reviwer.component';
import { AddReviwerComponent } from './pages/add-reviwer/add-reviwer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EditEtatComponent } from './pages/editetat/editetat.component';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditdocumentComponent } from './pages/editdocument/editdocument.component';
import { EditreviwerComponent } from './pages/editreviwer/editreviwer.component';
import { MatSelectModule } from '@angular/material/select';
import { AddReviwerToDocumentComponent } from './pages/add-reviwer-to-document/add-reviwer-to-document.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    NavbarComponent,
    AddDocumentComponent,
    EtatComponent,
    AddetatComponent,
    ReviwerComponent,
    AddReviwerComponent,
    EditEtatComponent,  
    EditdocumentComponent,
    EditreviwerComponent,
    AddReviwerToDocumentComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},{provide: MAT_DIALOG_DATA, useValue: {}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
