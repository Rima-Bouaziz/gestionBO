import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Etat } from 'src/app/models/etat';
import { EtatService } from 'src/app/services/EtatService/etat.service';

@Component({
  selector: 'app-addetat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddetatComponent implements OnInit {
  formValue=new FormGroup({
    designation:new FormControl(''),
    
  })
  constructor(
    public router: Router, 
    public etatservice: EtatService) { }

  ngOnInit(): void {
  }
  addEtat() {
  
    let etat:Etat ={
      id:null!, 
      designation:this.formValue.value.designation!,
    };
    this.etatservice.postEtat(etat).subscribe((res: any) => {
      this.clearForm();
      this.router.navigate(['/etat'])
    });
  }
  clearForm() {
    this.formValue.reset();
  }

}
