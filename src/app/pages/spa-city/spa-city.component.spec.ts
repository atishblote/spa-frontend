import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaCityComponent } from './spa-city.component';

describe('SpaCityComponent', () => {
  let component: SpaCityComponent;
  let fixture: ComponentFixture<SpaCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
