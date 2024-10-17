import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionsComponent } from './user-options.component';

describe('UserOptionsComponent', () => {
  let component: UserOptionsComponent;
  let fixture: ComponentFixture<UserOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
