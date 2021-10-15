import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { timer } from 'rxjs';

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
  ngOnChanges(){
    let f = this.fires.slice()
    f.push("ngOnChanges fired");
    this.fires = f;
  }
  click() {

  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    timer(1000).subscribe(val => {
      console.log(val)
      this.cdr.markForCheck()
    }
    )
  }

}

