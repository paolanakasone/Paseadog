/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaxisComponent } from './taxis.component';

describe('TaxisComponent', () => {
  let component: TaxisComponent;
  let fixture: ComponentFixture<TaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
