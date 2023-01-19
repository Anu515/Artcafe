import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcontactComponent } from './excontact.component';

describe('ExcontactComponent', () => {
  let component: ExcontactComponent;
  let fixture: ComponentFixture<ExcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
