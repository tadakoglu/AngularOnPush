import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
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

  }
  time=0

  constructor(private cdr: ChangeDetectorRef, public el:ElementRef) {}

  clickCD() {
    this.cdr.detectChanges();
  }
  clickMarkForCheck(){
    this.cdr.markForCheck();
  }


  ngOnInit() {
    
    // interval(1000).subscribe(val=>{
    //   this.time=val;
    //   //this.cdr.markForCheck(); // use markforcheck with checkonce stragey
     
    //   })
  }

  check(){
    highlight(this.el);   
   }


}

