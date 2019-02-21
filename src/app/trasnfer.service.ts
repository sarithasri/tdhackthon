import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrasnferService {

  //functionlist any=[{"x":51,"y":53},{"x":61,"y":63},{"x":71,"y":73},{"x":81,"y":83},{"x":91,"y":93}];
  functionlist;
  constructor(
    private  _http:  HttpClient
  ) { }

  
  mytransferFunction() {
    //just added console.log which will display the event details in browser on click of the button.
     this._http.get("http://172.16.117.238:8080/RA/rest/MapService/current").subscribe(
       resultArray => this.functionlist = resultArray,
       error => console.log("Error : " + error));
     console.log(this.functionlist)

     this.functionlist=[{"x":51,"y":53},{"x":61,"y":63},{"x":71,"y":73},{"x":81,"y":83},{"x":91,"y":93}]
  return this.functionlist;
    }
}
