import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageCityComponent } from './massage-city.component';

describe('MassageCityComponent', () => {
  let component: MassageCityComponent;
  let fixture: ComponentFixture<MassageCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassageCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassageCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
