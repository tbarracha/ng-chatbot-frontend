import { Routes } from '@angular/router';
import { PageChatbotComponent } from './core/pages/page-chatbot/page-chatbot.component';

export const routes: Routes = [
    { path: '', component: PageChatbotComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
