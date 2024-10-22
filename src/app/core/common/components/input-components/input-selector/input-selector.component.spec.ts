import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectorComponent } from './input-selector.component';

describe('InputSelectorComponent', () => {
  let component: InputSelectorComponent;
  let fixture: ComponentFixture<InputSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
