import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartExperimComponent } from './smart-experim.component';

describe('SmartExperimComponent', () => {
  let component: SmartExperimComponent;
  let fixture: ComponentFixture<SmartExperimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartExperimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartExperimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
