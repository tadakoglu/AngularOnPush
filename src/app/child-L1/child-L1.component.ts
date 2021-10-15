import { AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-L1',
  templateUrl: './child-L1.component.html',
  styleUrls: ['./child-L1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildL1Component implements OnInit, DoCheck, AfterViewChecked {

  fires: string[] = []
  constructor() { }
  ngAfterViewChecked(): void {
    let f = this.fires.slice()
    f.push("ngAfterViewInit fired");
    this.fires = f;
  }
  ngDoCheck(): void {
    let f = this.fires.slice()
    f.push("ngDoCheck fired");
    this.fires = f;
  }
  click(){
    
  }

  ngOnInit() {
  }

}

