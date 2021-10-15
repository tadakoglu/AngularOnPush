/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildR1L1Component } from './child-R1-L1.component';

describe('ChildR1L1Component', () => {
  let component: ChildR1L1Component;
  let fixture: ComponentFixture<ChildR1L1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildR1L1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildR1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
