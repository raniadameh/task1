import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counterLocalValue:number = 0;
  minValue!:number ;
  maxValue!:number ;
  @Input() parentData!: number; 
  @Input() minData!: number;
  @Input() maxData!: number;
  @Output() childData=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.counterLocalValue=this.parentData;
    this.checkCounter()
  }

  increase(){

    this.counterLocalValue=this.counterLocalValue+1;
    this.childData.emit(this.counterLocalValue);
    this.checkCounter()
  }
  decrease(){
    this.counterLocalValue=this.counterLocalValue-1;
    this.childData.emit(this.counterLocalValue);
    this.checkCounter()
  }
  public styleBinding={
    color:'black'
    }

  checkCounter(){
    if (this.counterLocalValue<this.minData)
    {
      this.styleBinding.color='yellow'
    }
    else if(this.counterLocalValue >this.maxData)
    {
      this.styleBinding.color='red'
    }
    else if(this.counterLocalValue<this.maxData && this.counterLocalValue>this.minData)
    {
      this.styleBinding.color='green'
    }
  
  }
}
