import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillesSousComponent } from './familles_sous.component';

describe('FamillesComponent', () => {
  let component: FamillesSousComponent;
  let fixture: ComponentFixture<FamillesSousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamillesSousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamillesSousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
