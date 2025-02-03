import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailsModalComponent } from './dog-details-modal.component';

describe('DogDetailsModalComponent', () => {
  let component: DogDetailsModalComponent;
  let fixture: ComponentFixture<DogDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
