import { AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import highlight from '../global/highlight';

@Component({
  selector: 'app-child-R1',
  templateUrl: './child-R1.component.html',
  styleUrls: ['./child-R1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildR1Component implements OnInit, DoCheck, AfterViewChecked, OnChanges {

  @Input() inputElR1: any
  
  fires: string[] = []
  constructor(public el:ElementRef) { }
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
  ngOnChanges(){
    let f = this.fires.slice()
    f.push("ngOnChanges fired");
    this.fires = f;
  }
  click() {

  }

  ngOnInit() {
  }

   check(){
    highlight(this.el);   
   }

}
