import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAvatarComponent } from './entity-avatar.component';

describe('EntityAvatarComponent', () => {
  let component: EntityAvatarComponent;
  let fixture: ComponentFixture<EntityAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
