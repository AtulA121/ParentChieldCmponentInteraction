import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChieldComponentComponent } from './chield-component/chield-component.component';
import { ServiceDataService } from './service-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private _teacher : ServiceDataService)
  {

  }

  @ViewChild(ChieldComponentComponent,{static:true}) chieldComponentComponent : ChieldComponentComponent
  ngAfterViewInit(): void {
    // this.chieldComponentComponent.message="Hii atul i am from parent...";
  }
  parentData : boolean=true;

  greeting(obj : any)
  {
    console.log("came from chield : "+obj);
  }

  sayHii()
  {
    this._teacher.sendMessage("hiiiii...");
  }
}
