import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { interval, timer } from 'rxjs';
import highlight from '../global/highlight';

@Component({
  selector: 'app-child-L1-R1',
  templateUrl: './child-L1-R1.component.html',
  styleUrls: ['./child-L1-R1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ChildL1R1Component implements OnInit, DoCheck, AfterViewChecked, OnChanges {
  @Input() inputElL1R1: any
  fires: string[] = []
  normalProp:string = ''
  ngAfterViewChecked(): void {
    let f = this.fires.slice()
    f.push("ngAfterViewChecked fired");
    this.fires = f;
  }
  ngDoCheck(): void {
    let f = this.fires.slice()
    f.push("ngDoCheck fired");
    this.fires = f;
  }
  ngOnChanges() {
    let f = this.fires.slice()
    f.push("ngOnChanges fired");
    this.fires = f;
  }
  click() {
    this.inputElL1R1.x ='osman'
  }
  time:any

  constructor(private cdr: ChangeDetectorRef, public el:ElementRef) {}

  clickCD() {
    this.cdr.detectChanges();
  }
  clickMarkForCheck(){
    this.cdr.markForCheck();
  }
  
  
  clickSubscribe(){ // (click) event will fire
    timer(2000).subscribe(val=>{
      this.time = 100
      this.cdr.markForCheck() // async will auto call this and unsubscribe also., it is a great choice for onpush
    })
  }
  ngOnInit() {
    
    // interval(1000).subscribe(val => {
      
    // })
  }
  
  @Output()
  event = new EventEmitter<void>()

  emit(){
   setTimeout(() => {
    this.event.next()
    //this.time = 'testl1r1ok'
   }, 2000);
   
  }

  check(){
    highlight(this.el);   
   }


}

