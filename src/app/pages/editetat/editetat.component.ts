import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etat } from 'src/app/models/etat';
import { EtatService } from 'src/app/services/EtatService/etat.service';

@Component({
  selector: 'app-editetat',
  templateUrl: './EditEtat.component.html',
  styleUrls: ['./EditEtat.component.css']
})
export class EditEtatComponent implements OnInit {

  formValue=new FormGroup({
    designation:new FormControl(''),
    
  })
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public etatservice: EtatService,
    public thisDialog:MatDialogRef<EditEtatComponent>) { }

  ngOnInit(): void {
    console.log(this.data)
    this.formValue.patchValue({
      designation: this.data['etat'].designation
    })
  }
  updateEtat() {
  
    let etat:Etat ={
      id:this.data['etat'].id, 
      designation :this.formValue.value.designation!,
     
    };
    
    this.etatservice.EditEtat(etat).subscribe((res: any) => {
      this.clearForm();
      this.thisDialog.close()
    });
  }
  clearForm() {
    this.formValue.reset();
  }
  

}
