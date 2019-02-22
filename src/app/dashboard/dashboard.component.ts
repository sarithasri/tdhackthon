import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

import { UserService, IUser } from '../users';

import { ItemsService, ProductsService, AlertsService } from '../../services';

import { multi } from './data';
import { HttpClient} from '@angular/common/http';
import { TrasnferService } from '../trasnfer.service';


@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  viewProviders: [ ItemsService, ProductsService, AlertsService ],
})
export class DashboardComponent implements OnInit {

  functionlist;
  functionlist2;
  variable1;
  variable2;

  myClickFunction() {
     
   this.variable1= this._trasnferService.mytransferFunction()
   console.log(this.variable1)
   console.log("myClickFunction")
   this.functionlist=[]
  }
    //just added console.log which will display the event details in browser on click of the button.
     //this._http.get("http://172.16.117.238:8080/RA/rest/MapService/current").subscribe(
     // resultArray => this.functionlist = resultArray,
      // error => console.log("Error : " + error));
     //console.log(this.functionlist)
     myClickFunction2(){

  this.variable2= this._trasnferService.mytransferFunction2()
   console.log(this.variable2)
   console.log("myClickFunction2")
   this.functionlist=[]

}
   
 

   

  // Current date
  year: any = new Date().getFullYear();

  items: Object[];
  users: IUser[];
  products: Object[];
  alerts: Object[];

  lat = "91.8";
  lng = "98.0";
  zoom = "";

  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';

  colorScheme: any = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };

  // line, area
  autoScale: boolean = true;

  constructor(private _titleService: Title,
              private  _http:  HttpClient,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
              private _itemsService: ItemsService,
              private _userService: UserService,
              private _alertsService: AlertsService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService,
              private _trasnferService:TrasnferService) {
                // Chart
                this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
   this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
                this.multi = multi.map((group: any) => {
                  group.series = group.series.map((dataItem: any) => {
                    dataItem.name = new Date(dataItem.name);
                    return dataItem;
                  });
                  return group;
                });
  }

  ngOnInit(): void {
    this._titleService.setTitle( 'Covalent Quickstart' );
    this._loadingService.register('items.load');
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 750);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((items: Object[]) => {
        this.items = items;
        setTimeout(() => {
          this._loadingService.resolve('items.load');
        }, 750);
      });
    });
    this._loadingService.register('alerts.load');
    this._alertsService.query().subscribe((alerts: Object[]) => {
      this.alerts = alerts;
      setTimeout(() => {
        this._loadingService.resolve('alerts.load');
      }, 750);
    });
    this._loadingService.register('products.load');
    this._productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this._loadingService.resolve('products.load');
      }, 750);
    });
    this._loadingService.register('favorites.load');
    this._productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this._loadingService.resolve('favorites.load');
      }, 750);
    });
    this._loadingService.register('users.load');
    this._userService.query().subscribe((users: IUser[]) => {
      this.users = users;
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 750);
    }, (error: Error) => {
      this._userService.staticQuery().subscribe((users: IUser[]) => {
        this.users = users;
        setTimeout(() => {
          this._loadingService.resolve('users.load');
        }, 750);
      });
    });
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
