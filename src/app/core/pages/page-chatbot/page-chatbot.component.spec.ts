import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatbotComponent } from './page-chatbot.component';

describe('PageChatbotComponent', () => {
  let component: PageChatbotComponent;
  let fixture: ComponentFixture<PageChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageChatbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
