import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.css']
})
export class AllatainkComponent {
  showError=false
  errorMessage:any=""

  allatok:any=[]
  oszlopok:any=[
    {key:"nev", text:"Állat neve"},
    {key:"faj", text:"Faj"},
    {key:"gondozo", text:"Gondozója"},
    {key:"helye", text:"Helye az állatkertben"},
    {key:"erkezes", text:"Érkezése"},
    ]

  constructor(private base:BaseService){
    

    this.base.getData("allatok").subscribe({
      next:(adatok:any)=>{
        this.allatok=adatok;
        this.showError=false;
      },
      error:(e)=>{
        this.showError=true;
        this.errorMessage=e;
      }
    }
    )

  }

  update(){}
  delete(){}

}
