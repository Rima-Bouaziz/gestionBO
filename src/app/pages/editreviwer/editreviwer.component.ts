import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reviwer } from 'src/app/models/reviwer';
import { ReviwerService } from 'src/app/services/ReviwerService/reviwer.service';

@Component({
  selector: 'app-editreviwer',
  templateUrl: './editreviwer.component.html',
  styleUrls: ['./editreviwer.component.css']
})
export class EditreviwerComponent implements OnInit {

  formValue=new FormGroup({
    name:new FormControl(''),
   
  })
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public reviwerservice: ReviwerService,
    public thisDialog: MatDialogRef<EditreviwerComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.formValue.patchValue({
      name:this.data['reviwer'].name,
      
    })
  }
  updateReviwer() {
  console.log(this.data['reviwer'])
    let reviwer ={
      Id:this.data['reviwer'].id, 
      name:this.formValue.value.name!,
      documents:this.data['reviwer'].documents
    };
    console.log(reviwer)
    this.reviwerservice.EditReviwer(reviwer).subscribe((res: any) => {
      this.clearForm();
      this.thisDialog.close()
    });
  }
  clearForm() {
    this.formValue.reset();
  }
}
