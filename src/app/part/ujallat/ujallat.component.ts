import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:any;
  cim="Új lakó felvétele"
  gomb="Felvétel"
  constructor(private base:BaseService, 
    private router:Router,
    private route:ActivatedRoute
    ){

      this.route.paramMap.subscribe(
        (p:any)=>{
          // console.log(p)
          this.id=p.params.id;
          // console.log("id",this.id)
          if (this.id){
            // console.log("van ID")
            this.base.getAnimal(this.id).subscribe(
              (a)=>{
                this.allat=a
                this.cim="Lakó módosítása"
                this.gomb="Módosítás"
              }
            )
          }
        }
      )

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
