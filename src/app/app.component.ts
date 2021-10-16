import { AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import highlight from './global/highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, DoCheck, AfterViewChecked {
  title = 'OnPushTest';
  fires: string[] = []
  allElNumber = 0
  @Input() allEl: any = { x: 'Tayfun' }
  constructor(private cdr: ChangeDetectorRef, 
    public el: ElementRef, private appRef: ApplicationRef) {
  }
  
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
  click() {
    //this.allEl = {x:'osman'}
    this.allElNumber = 55555
  }
  clickCD() {
    this.cdr.detectChanges()
  }

  ngOnInit() {
    // interval(1000).subscribe(val => {
    //   this.allEl = {x:'TAYFUN' + val}
    //   console.log(val)
    //   // this.cdr.markForCheck()
    // })

  }
  check() {
    highlight(this.el);
  }

  checkTick(){
    this.appRef.tick()
  }

}

