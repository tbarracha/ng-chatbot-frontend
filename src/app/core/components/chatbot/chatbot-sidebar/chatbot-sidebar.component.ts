import { Component } from '@angular/core';
import { SidebarComponent } from '../../standalone/sidebar/sidebar.component';

@Component({
  selector: 'app-chatbot-sidebar',
  standalone: true,
  templateUrl: './chatbot-sidebar.component.html',
  styleUrls: ['./chatbot-sidebar.component.scss']
})
export class ChatbotSidebarComponent extends SidebarComponent {
  // You can add additional properties and methods here
}
