import { Routes } from '@angular/router';
import { PageChatbotSimpleComponent } from './core/pages/page-chatbot-simple/page-chatbot-simple.component';

export const routes: Routes = [
    { path: '', component: PageChatbotSimpleComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
