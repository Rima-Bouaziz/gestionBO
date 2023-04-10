import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reviwer } from 'src/app/models/reviwer';
import { ReviwerService } from 'src/app/services/ReviwerService/reviwer.service';

@Component({
  selector: 'app-add-reviwer',
  templateUrl: './add-reviwer.component.html',
  styleUrls: ['./add-reviwer.component.css']
})
export class AddReviwerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Source', 'Date-Reception ','Subject','Document-Adresse',
  'code','name','etat','reviwer','action'];
  dataSource!: MatTableDataSource<Document>;

   documents: Document[]= []
   formValue=new FormGroup({
    name :new FormControl(''),
    documents:new FormControl(''),
  })
  
  constructor(
    public router: Router,
    public reviwerservice: ReviwerService) { }

  ngOnInit(): void {
    this.loadData()
  } 

  loadData(){this.reviwerservice.getAllReviwer().subscribe((result: any)=>{
    console.log(result)
    this.documents=result
  })}

  removeDocument(reviwer:any) {
   this.reviwerservice.deleteReviwer(reviwer.id).subscribe((res:any)=>{
      this.loadData
   })
  }

  addReviwer() {
  
    let reviwer:Reviwer ={
      Id:null!, 
      name:this.formValue.value.name!,
      documents:null!
    };
    
    this.reviwerservice.postReviwer(reviwer).subscribe((res: any) => {
      this.clearForm();
      this.router.navigate(['/reviwer'])
    });
  }
  clearForm() {
    this.formValue.reset();
  }
  



}
