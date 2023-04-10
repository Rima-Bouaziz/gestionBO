import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './pages/add-document/add-document.component';
import { AddetatComponent } from './pages/add-etat/add-etat.component';
import { AddReviwerComponent } from './pages/add-reviwer/add-reviwer.component';
import { DocumentComponent } from './pages/document/document.component';
import { EtatComponent } from './pages/etat/etat.component';
import { ReviwerComponent } from './pages/reviwer/reviwer.component';


const routes: Routes = [
  {path:'',component:DocumentComponent},
  {path:'document',component:DocumentComponent},
  {path:'addDocument',component:AddDocumentComponent},
  {path:'etat',component:EtatComponent},
  {path:'addEtat',component:AddetatComponent},
  {path:'reviwer',component:ReviwerComponent},
  {path:'addReviwer',component:AddReviwerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
