import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSidebarComponent } from './chatbot-sidebar.component';

describe('ChatbotSidebarComponent', () => {
  let component: ChatbotSidebarComponent;
  let fixture: ComponentFixture<ChatbotSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
