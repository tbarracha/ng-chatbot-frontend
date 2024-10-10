import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatbotSimpleComponent } from './page-chatbot-simple.component';

describe('PageChatbotSimpleComponent', () => {
  let component: PageChatbotSimpleComponent;
  let fixture: ComponentFixture<PageChatbotSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageChatbotSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChatbotSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
