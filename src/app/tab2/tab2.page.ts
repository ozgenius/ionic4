import { Component } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { throws } from 'assert';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   hexDatas =[
    {
      "HEX":"#FFF",
      "Alpha":"0.3",
      "rgba":""
    },
    {
      "HEX":"#FFFFFF",
      "Alpha":1,
      "rgba":""
    },
    {
      "HEX":"FFF",
      "Alpha":".5",
      "rgba":""
    },
    {
      "HEX":"FFFFFF",
      "Alpha":1,
      "rgba":""
    },
    {
      "HEX":"FFFFF",
      "Alpha":1,
      "rgba":""
    }
  ]
  constructor(){
    console.log(this.hexToRGBA("#FFF",1));
  }

  convert(datas,i){
    this.hexDatas[i].rgba = this.hexToRGBA(datas.HEX, datas.Alpha)+"";
  }

  hexToRGBA(hex, opacity) {
    var a;
    var regex1 = RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    var regex2 = RegExp("^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    if (!(regex1.test(hex) || regex2.test(hex))) {
      return throws;
    }
    if (opacity > 1 || opacity < 0) {
      return false;
    } else {
      a = opacity;
    }
  
    if (hex.charAt(0) === "#") {
      hex = hex.substr(1);
    }
    var values = hex.split(""),
      r,
      g,
      b;
    if (hex.length === 3) {
      r = parseInt(values[0].toString() + values[0].toString(), 16);
      g = parseInt(values[1].toString() + values[1].toString(), 16);
      b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
      r = parseInt(values[0].toString() + values[1].toString(), 16);
      g = parseInt(values[2].toString() + values[3].toString(), 16);
      b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
      return false;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }


  
}

