/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildL1L1Component } from './child-L1-L1.component';

describe('ChildL1L1Component', () => {
  let component: ChildL1L1Component;
  let fixture: ComponentFixture<ChildL1L1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildL1L1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildL1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
