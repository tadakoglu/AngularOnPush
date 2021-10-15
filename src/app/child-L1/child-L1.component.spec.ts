/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildL1Component } from './child-L1.component';

describe('ChildL1Component', () => {
  let component: ChildL1Component;
  let fixture: ComponentFixture<ChildL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
