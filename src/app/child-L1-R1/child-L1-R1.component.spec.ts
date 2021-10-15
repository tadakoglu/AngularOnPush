/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildL1R1Component } from './child-L1-R1.component';

describe('ChildL1R1Component', () => {
  let component: ChildL1R1Component;
  let fixture: ComponentFixture<ChildL1R1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildL1R1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildL1R1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
