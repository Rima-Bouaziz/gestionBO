import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from 'src/app/services/DocumentService/document-service.service';
import { EtatService } from 'src/app/services/EtatService/etat.service';
import { Etat } from 'src/app/models/etat';
import { ReviwerService } from 'src/app/services/ReviwerService/reviwer.service';
import { Reviwer } from 'src/app/models/reviwer';
@Component({
  selector: 'app-editdocument',
  templateUrl: './editdocument.component.html',
  styleUrls: ['./editdocument.component.css']
})
export class EditdocumentComponent implements OnInit {
  listEtat: any;
  listReviwer: any;
  selectedEtat: any;
  selectedReviwer: any;
  formValue = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    source: new FormControl(''),
    date: new FormControl(new Date()),
    subject: new FormControl(''),
    address: new FormControl(''),
    etat: new FormControl(new Etat()),
    reviwer: new FormControl(new Reviwer())
  })
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public documentservice: DocumentService,
    public reviwerService: ReviwerService,
    public etatService: EtatService,
    public thisDialog: MatDialogRef<EditdocumentComponent>) { }

  ngOnInit(): void {
    this.etatService.getAllEtats().subscribe((res: any) => {
      this.listEtat = res
      this.listEtat.forEach((element: any) => {
        if (element.designation == this.data['document'].etat.designation) {
          this.selectedEtat = element
        }
      });
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
    this.formValue.patchValue({
      code: this.data['document'].code,
      name: this.data['document'].name,
      source: this.data['document'].source,
      date: new Date(this.data['document'].date),
      subject: this.data['document'].subject,
      address: this.data['document'].address,
      etat: this.data['document'].etat,
      reviwer: this.data['document'].reviwer,
    })
  }
  updateDocument() {

    let document = {
      Id: Number(this.data['document'].id),
      code: this.formValue.value.code!,
      name: this.formValue.value.name!,
      source: this.formValue.value.source!,
      dateReception: new Date(this.formValue.value.date!),
      subject: this.formValue.value.subject!,
      address: this.formValue.value.address!,
      etat: this.formValue.value.etat!,
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
