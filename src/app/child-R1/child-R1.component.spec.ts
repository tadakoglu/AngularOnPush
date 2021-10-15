/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildR1Component } from './child-R1.component';

describe('ChildR1Component', () => {
  let component: ChildR1Component;
  let fixture: ComponentFixture<ChildR1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildR1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildR1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
