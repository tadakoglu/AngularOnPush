/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildR1R1Component } from './child-R1-R1.component';

describe('ChildR1R1Component', () => {
  let component: ChildR1R1Component;
  let fixture: ComponentFixture<ChildR1R1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildR1R1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildR1R1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
