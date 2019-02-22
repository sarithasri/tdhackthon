import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrasnferService {

  //functionlist any=[{"x":51,"y":53},{"x":61,"y":63},{"x":71,"y":73},{"x":81,"y":83},{"x":91,"y":93}];
  functionlist;
  functionlist1;
  constructor(
    private  _http:  HttpClient
  ) { }

  
  mytransferFunction() {

    this.functionlist =[] 
    console.log("firstmapValidation")
   // just added console.log which will display the event details in browser on click of the button.
   //http://wingd186020-pik:8080/RA/rest/MapService/current
     this._http.get("http://localhost:4200/current").subscribe(
       resultArray => this.functionlist = resultArray,
       error => console.log("Error : " + error));
     console.log(this.functionlist)
     console.log("firstmapOutValidation")
     //this.functionlist=[{"draggable":true,"label":"A","lat":51.2,"lng":-123.875903},{"draggable":true,"label":"A","lat":41.26955,"lng":-121.416081},{"draggable":true,"label":"A","lat":34.912962,"lng":-119.307663}];
    //this.functionlist=[];
    // lat: 32.7441658,
		 // lng: -118.0223405,
		 // label: 'A',
		// draggable: false
	 // },
     // this.functionlist=[[{"draggable":true,"label":"A","lat":51.2,"lng":-123.875903},{"draggable":true,"label":"A","lat":41.26955,"lng":-121.416081},{"draggable":true,"label":"A","lat":34.912962,"lng":-119.307663}]];
  return this.functionlist;
    }

    mytransferFunction2(){
      console.log("SecondmapValidation")
      this._http.get("http://localhost:4200/current").subscribe(
       resultArray => this.functionlist = resultArray,
       error => console.log("Error : " + error));
     console.log(this.functionlist)
     console.log("SecondmapOutValidation")
     //this.functionlist=[{"draggable":true,"label":"A","lat":41.26955,"lng":-121.416081},{"draggable":true,"label":"A","lat":34.912962,"lng":-119.307663}]];
    // this.functionlist= 
  return this.functionlist;
    }
}
