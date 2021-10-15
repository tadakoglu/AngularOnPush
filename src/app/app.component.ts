import { AfterViewChecked, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck, AfterViewChecked {
  title = 'OnPushTest';
  fires: string[] = []
  @Input() allEl:any = {x:'Tayfun'}
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
  click() {

  }

  ngOnInit() {
  }

}

