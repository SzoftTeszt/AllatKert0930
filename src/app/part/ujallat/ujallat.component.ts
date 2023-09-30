import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-ujallat',
  templateUrl: './ujallat.component.html',
  styleUrls: ['./ujallat.component.css']
})
export class UjallatComponent {
  allat:any={}
  gondozok:any=[]
  lakohelyek:any=[]
  
  constructor(private base:BaseService, private router:Router){

    this.base.getData("gondozo").subscribe(
      adatok=>this.gondozok=adatok
    )
    this.base.getData("lakhely").subscribe(
      adatok=>this.lakohelyek=adatok
    )

  }

  save(){
    console.log(this.allat)
    this.base.newAnimal(this.allat).subscribe(
      ()=>this.router.navigate(['/allataink'])
    )
  }
}
