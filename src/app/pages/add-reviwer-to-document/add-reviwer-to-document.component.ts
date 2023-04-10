import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reviwer } from 'src/app/models/reviwer';
import { DocumentService } from 'src/app/services/DocumentService/document-service.service';
import { EtatService } from 'src/app/services/EtatService/etat.service';
import { ReviwerService } from 'src/app/services/ReviwerService/reviwer.service';

@Component({
  selector: 'app-add-reviwer-to-document',
  templateUrl: './add-reviwer-to-document.component.html',
  styleUrls: ['./add-reviwer-to-document.component.css']
})
export class AddReviwerToDocumentComponent implements OnInit {
  listReviwer: any;
  selectedReviwer: any;
  formValue = new FormGroup({
    reviwer: new FormControl(new Reviwer())
  })
  listEtat: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public documentservice: DocumentService,
    public reviwerService: ReviwerService,
    public etatService: EtatService,
    public thisDialog: MatDialogRef<AddReviwerToDocumentComponent>) { }

  ngOnInit(): void {
    this.etatService.getAllEtats().subscribe((res: any) => {
      this.listEtat = res
    })
    this.reviwerService.getAllReviwer().subscribe((res: any) => {
      this.listReviwer = res
      console.log(this.listReviwer)
      this.listReviwer.forEach((element: any) => {
        if (element.name == this.data['document'].reviwer.name) {
          this.selectedReviwer = element
        }
      });
    })
  
  }
  addReviwerToDocument() {

    let document = {
      Id: Number(this.data['document'].id),
      code: this.data['document'].code!,
      name: this.data['document'].name!,
      source: this.data['document'].source!,
      dateReception: new Date(this.data['document'].date!),
      subject: this.data['document'].subject!,
      address: this.data['document'].address!,
      etat: this.listEtat[1],
      reviwer: this.formValue.value.reviwer!,
    };
    this.documentservice.EditDocument(document).subscribe((res: any) => {
      this.clearForm();
      this.thisDialog.close()
    });
  }
  clearForm() {
    this.formValue.reset();
  }
}
