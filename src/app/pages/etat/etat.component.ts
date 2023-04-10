import { Component, OnInit } from '@angular/core';
import { EtatService } from "../../services/EtatService/etat.service";
import { Etat } from 'src/app/models/etat';
import {MatTableDataSource} from '@angular/material/table'
import {  FormControl, FormGroup } from '@angular/forms';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { EditEtatComponent } from '../editetat/editetat.component';
@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {
 
  etats: any
  displayedColumns: string[] = ['id', 'designation', 'action'];
  dataSource!: MatTableDataSource<Etat>;
  formBuilder: any;
  formValue=new FormGroup({
    search:new FormControl(''),
  })
  constructor(public etatService: EtatService,
    public dialog: MatDialog,
    public dialogRef:MatDialogRef<EditEtatComponent>) { }
  editForm!: FormGroup;
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.etatService.getAllEtats().subscribe((result: any)=>{
      console.log(result)
      this.etats=result
      this.dataSource=new MatTableDataSource(this.etats)
    })
  }
  removeEtat(etat:Etat){
      this.etatService.deleteEtat(etat.id).subscribe((res:any)=>{
        console.log(res)
        this.loadData()
      })
  }

  openDialogEdit(etat:Etat){
    this.dialogRef = this.dialog.open(EditEtatComponent,{
      height: 'auto',
      width: 'auto',
      data: {
        etat: etat
      }
    });
    this.dialogRef.afterClosed().subscribe(_result=>{
      this.loadData()
    });
  }
  filter(){
    if(this.formValue.value.search!=""){
      console.log(this.formValue.value.search)
      this.etats=this.etats.filter((element: any)=>element.designation.includes(this.formValue.value.search!))
      this.dataSource=new MatTableDataSource(this.etats)
    }else{
      this.loadData()
    }
  }
}








