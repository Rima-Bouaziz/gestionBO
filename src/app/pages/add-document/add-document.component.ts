import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DocumentService } from 'src/app/services/DocumentService/document-service.service';
import { Document } from 'src/app/models/document';
import { EtatService } from 'src/app/services/EtatService/etat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  formValue=new FormGroup({
    code:new FormControl(''),
    name:new FormControl(''),
    source:new FormControl(''),
    date:new FormControl(''),
    subject:new FormControl(''),
    address:new FormControl(''),
    etat:new FormControl(''),
    reviwer:new FormControl('')
  })
  constructor(
    public router: Router, 
    public documentservice: DocumentService,
    public etatService:EtatService) { }

  ngOnInit(): void {
  }
  addDocument() { 
    this.etatService.getAllEtats().subscribe((listEtats:any)=>{
      let document:Document ={
        Id: null!,
        code:this.formValue.value.code!,
        name:this.formValue.value.name!,
        source:this.formValue.value.source!,
        dateReception: new Date(this.formValue.value.date!),
        subject:this.formValue.value.subject!,
        address:this.formValue.value.address!,
        etat:listEtats[0],
        reviwer:null!
      };
      this.documentservice.postDocument(document).subscribe((res: any) => {
        this.clearForm();
        this.router.navigate(['/document'])
      });
    })
    
  }
  clearForm() {
    this.formValue.reset();
  }
}
