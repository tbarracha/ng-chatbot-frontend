import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBooleanSelectorComponent } from './input-boolean-selector.component';

describe('InputBooleanSelectorComponent', () => {
  let component: InputBooleanSelectorComponent;
  let fixture: ComponentFixture<InputBooleanSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBooleanSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBooleanSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
