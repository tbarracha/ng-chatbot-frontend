import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotEventManagerService {
  private sidebarToggleSubject = new Subject<void>();
  isSidebarOpen = true;

  constructor() {}

  // Method to get the observable for sidebar toggle
  getSidebarToggleObservable() {
    return this.sidebarToggleSubject.asObservable();
  }

  // Method to trigger the sidebar toggle
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggleSubject.next();
  }
}
