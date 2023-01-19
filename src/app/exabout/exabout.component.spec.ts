import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaboutComponent } from './exabout.component';

describe('ExaboutComponent', () => {
  let component: ExaboutComponent;
  let fixture: ComponentFixture<ExaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
