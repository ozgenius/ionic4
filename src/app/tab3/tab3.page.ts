import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/DataService';
import * as _ from "lodash";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  diziler;
  products=[];
  benzerOran=0;
  benzerUrun:any=0;
  constructor(private datas: DataService){

  }

  ngOnInit(){
    
    this.datas.getData().subscribe((res) => {
      for(let key in res){
         this.products.push(res[key]);

      }
    });

  }
  findLike(dizi, index){
    let i=0;
    this.benzerOran=0
    this.benzerUrun=index
    for(let product of this.products){
      if(i != index){
        let kesisim = this.findIntersection(dizi, product);
        let birlesim = this.findUnionMerge(dizi, product);
        if(this.benzerOran < (kesisim/birlesim)){
            this.benzerOran = (kesisim/birlesim);
            this.benzerUrun = i
            console.log(product);
        }
        
      }
      i++;
      
    }

    this.benzerUrun = (this.benzerUrun == index) ? "Benzer Ürün Bulunamadı": this.benzerUrun+1;
  }
  findUnionMerge(dizi1, dizi2){
      return _.union(dizi1,dizi2).length
  }
  findIntersection(dizi1, dizi2){
    return _.intersection(dizi1,dizi2).length
  }

}
