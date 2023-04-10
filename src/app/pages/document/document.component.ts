import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/DocumentService/document-service.service';
import { Document } from 'src/app/models/document';
import { MatTableDataSource } from '@angular/material/table'
import { EditdocumentComponent } from 'src/app/pages/editdocument/editdocument.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { AddReviwerToDocumentComponent } from '../add-reviwer-to-document/add-reviwer-to-document.component';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  

})
export class DocumentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Source', 'dateReception', 'Subject', 'Document-Adresse',
    'code', 'name', 'etat', 'reviwer', 'action'];
  dataSource!: MatTableDataSource<Document>;
  documents: Document[] = []
  formValue=new FormGroup({
    search:new FormControl(''),
  })

  constructor(public documentservice: DocumentService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditdocumentComponent>,
    public dialogRefReviw: MatDialogRef<AddReviwerToDocumentComponent>,) { }

  ngOnInit(): void {
    this.loadData()
  }


  loadData() {
    this.documentservice.getAllDocuments().subscribe((result: any) => {
      console.log(result)
      this.documents = result
      this.dataSource = new MatTableDataSource(this.documents)
    })
  }

  removeDocument(document: any) {
    this.documentservice.deleteDocument(document.id).subscribe((res: any) => {
      this.loadData()
    })
  }

  openDialogEdit(document: Document) {
    this.dialogRef = this.dialog.open(EditdocumentComponent, {
      height: '80%',
      width: '60%',
      data: {
        document: document
      }
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData()
    });
  }
  openDialogAddReviwer(document: Document){
    this.dialogRefReviw = this.dialog.open(AddReviwerToDocumentComponent, {
      height: '80%',
      width: '60%',
      data: {
        document: document
      }
    });
    this.dialogRefReviw.afterClosed().subscribe(_result => {
      this.loadData()
    });
  }
  filter(){
    if(this.formValue.value.search!=""){
      this.documents=this.documents.filter(element=>element.name.includes(this.formValue.value.search!)||
      element.source.includes(this.formValue.value.search!)||
      element.subject.includes(this.formValue.value.search!)||
      element.address.includes(this.formValue.value.search!)||
      element.code.includes(this.formValue.value.search!)||
      element.etat.designation.includes(this.formValue.value.search!)||
      element.reviwer?.name.includes(this.formValue.value.search!))
      this.dataSource=new MatTableDataSource(this.documents)
    }else{
      this.loadData()
    }
  }
}


