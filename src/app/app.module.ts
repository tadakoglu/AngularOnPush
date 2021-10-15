import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildL1Component } from './child-L1/child-L1.component';
import { ChildR1Component } from './child-R1/child-R1.component';

import { ChildL1L1Component } from './child-L1-L1/child-L1-L1.component';
import { ChildL1R1Component } from './child-L1-R1/child-L1-R1.component';
import { ChildR1L1Component } from './child-R1-L1/child-R1-L1.component';
import { ChildR1R1Component } from './child-R1-R1/child-R1-R1.component';

@NgModule({
  declarations: [						
    AppComponent,
      ChildL1Component,
      ChildR1Component,
      ChildL1L1Component,
      ChildL1R1Component,
      ChildR1L1Component,
      ChildR1R1Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
