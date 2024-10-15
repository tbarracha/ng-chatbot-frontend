import { Routes } from '@angular/router';
import { PageChatbotComponent } from './core/pages/page-chatbot/page-chatbot.component';
import { PageCompanyComponent } from './pages/page-company/page-company.component';

export const routes: Routes = [
    { path: '', component: PageChatbotComponent },
    { path: 'minsait', component: PageCompanyComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
