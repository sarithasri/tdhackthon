import { Component, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TrasnferService } from '../trasnfer.service';



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
 
})

export class MapComponent {
  temp;
	constructor(
		private _trasnferService:TrasnferService){}
		//console.log(this.functionlist)
		
  ngDoCheck(){
		console.log(this._trasnferService.functionlist);
		//console.log("In do check")
		this.markers = this._trasnferService.functionlist;
		console.log(this.markers)
	}



	
	//this.functionlist=[{"x":51,"y":53},{"x":61,"y":63},{"x":71,"y":73},{"x":81,"y":83},{"x":91,"y":93}]


zoom: number = 5;
lat: number = 32.7441658;
lng: number = -118.0223405;


clickedMarker(label: string, index: number) {
	console.log(`clicked the marker: ${label || index}`)
}
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
	
	 markers: marker[] = [
	 // {

		//	lat: 32.7441658,
		 // lng: -118.0223405,
		 // label: 'A',
		// draggable: false
	 // },
	// {
		 // lat: 51.373858,
		 // lng: 7.215982,
		 // label: '',
		 //draggable: false
	  //}
	 // {
		 // lat: 51.723858,
		  //lng: 7.895982,
		  //label: '',
		  //draggable: true
	  //}
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
	
	
}


