import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-chield-component',
  templateUrl: './chield-component.component.html',
  styleUrls: ['./chield-component.component.css']
})
export class ChieldComponentComponent implements OnInit,OnChanges {
// export class ChieldComponentComponent implements OnChanges { //for parentChield component interaction

  //for get parentaData from parent component
  public message : any="hiii";
  parData : boolean;
  // @Input() parentData:boolean;
  // @Input() parentData:boolean=true;  //default value
  // @Input("parentData") parentData:boolean; //like can also

  //using getter and setter parentChield component interaction
  get parentData()
  {
    return this.parData;
  }

  @Input()
  set parentData(value:boolean)
  {
    this.parData=value;
  }

  constructor(private _teacher : ServiceDataService) { }

  ngOnInit() {
    this._teacher.teacherMessage$.subscribe((message)=>{
      console.log("message from parent through observable : "+message);
    });
  }

  //on when input decorater changes
  ngOnChanges(changes : SimpleChanges)
  {
    console.log("",changes);
    console.log(changes["parentData"].currentValue);
  }

  chieldData(value)
  {
    console.log("called from parent..."+value);
  }

  @Output() greetEvent=new EventEmitter();
  greet()
  {
    // alert()
    this.greetEvent.emit("atul pisal");
  }
}
