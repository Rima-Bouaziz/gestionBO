import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Reviwer } from 'src/app/models/reviwer';
import { ReviwerService } from 'src/app/services/ReviwerService/reviwer.service';
import { EditreviwerComponent } from '../editreviwer/editreviwer.component';
@Component({

  selector: 'app-reviwer',
  templateUrl: './reviwer.component.html',
  styleUrls: ['./reviwer.component.css'],
 
})
export class ReviwerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'designation', 'action'];
  dataSource!: MatTableDataSource<Reviwer>;
  reviwers: any;
  formValue=new FormGroup({
    search:new FormControl(''),
  })
 

  constructor(public reviwerService: ReviwerService,
    public dialog: MatDialog,
    public dialogRef:MatDialogRef<EditreviwerComponent>) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.reviwerService.getAllReviwer().subscribe((result: any)=>{
    console.log(result)
    this.reviwers=result
    this.dataSource=new MatTableDataSource(this.reviwers)
  })}
  removeReviwer(reviwer:any) {
    this.reviwerService.deleteReviwer(reviwer.id).subscribe((res:any)=>{
       this.loadData()
    })
   }
   openDialogEdit(reviwer:Reviwer){
    this.dialogRef = this.dialog.open(EditreviwerComponent,{
      height: 'auto',
      width: 'auto',
      data: {
        reviwer:reviwer
      }
    });
    this.dialogRef.afterClosed().subscribe(_result=>{
      this.loadData()
    });
  }
  filter(){
    if(this.formValue.value.search!=""){
      this.reviwers=this.reviwers.filter((element: any)=>element.name.includes(this.formValue.value.search!))
      this.dataSource=new MatTableDataSource(this.reviwers)
    }else{
      this.loadData()
    }
  }
}
