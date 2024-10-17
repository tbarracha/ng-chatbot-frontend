import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankModalComponent } from './blank-modal.component';

describe('BlankModalComponent', () => {
  let component: BlankModalComponent;
  let fixture: ComponentFixture<BlankModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
