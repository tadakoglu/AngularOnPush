import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import highlight from '../global/highlight';

@Component({
  selector: 'app-child-L1-L1',
  templateUrl: './child-L1-L1.component.html',
  styleUrls: ['./child-L1-L1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ChildL1L1Component implements OnInit, DoCheck, AfterViewChecked, OnChanges {

  @Input() inputElL1L1: any
  fires: string[] = []
  constructor(private cdr: ChangeDetectorRef, public el: ElementRef) { }
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
  //time = 0
  ngOnInit() {

    // interval(1000).subscribe(val => {
    //   this.time = val;
    //   //this.cdr.markForCheck(); // use markforcheck with checkonce stragey

    // })
  }

  check(){
   highlight(this.el);   
  }

}

