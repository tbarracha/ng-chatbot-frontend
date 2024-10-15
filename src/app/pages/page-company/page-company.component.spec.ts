import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompanyComponent } from './page-company.component';

describe('PageCompanyComponent', () => {
  let component: PageCompanyComponent;
  let fixture: ComponentFixture<PageCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
