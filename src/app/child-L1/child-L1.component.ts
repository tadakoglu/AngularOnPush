import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import highlight from '../global/highlight';

@Component({
  selector: 'app-child-L1',
  templateUrl: './child-L1.component.html',
  styleUrls: ['./child-L1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildL1Component implements DoCheck, AfterViewChecked, OnChanges, OnInit {
  
  @Input() inputElL1: any
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
  constructor(private cdr: ChangeDetectorRef, public el:ElementRef) {}
  ngOnInit(): void {
    interval(1000).subscribe(val => {
      this.inputElL1 = {x:'TAYFUN' + val}
      console.log(val)
     // this.cdr.markForCheck()
    })
  }
  clickMarkForCheck(){
    this.cdr.markForCheck();
  }

  clickCD() {
    this.cdr.detectChanges();
  }

  check(){
    highlight(this.el);   
   }


}

