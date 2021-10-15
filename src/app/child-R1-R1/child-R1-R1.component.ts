import { AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-R1-R1',
  templateUrl: './child-R1-R1.component.html',
  styleUrls: ['./child-R1-R1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ChildR1R1Component implements OnInit, DoCheck, AfterViewChecked, OnChanges {

  @Input() inputElR1R1: any
  fires: string[] = []
  constructor() { }
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

}

