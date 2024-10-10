import { Component } from '@angular/core';
import { SelectorComponent } from "../../standalone/selector/selector.component";
import { SelectorOption } from '../../../models/standalone-models';
import { ThemeToggleComponent } from "../../standalone/theme-toggle/theme-toggle.component";
import { BaseThemedComponent } from '../../standalone/base-themed-component/base-themed-component.component';

@Component({
  selector: 'app-chatbot-header',
  standalone: true,
  imports: [SelectorComponent, ThemeToggleComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss'
})
export class ChatbotHeaderComponent extends BaseThemedComponent {
  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  selectedModel: SelectorOption | null = null;

  onModelSelected(model: SelectorOption) {
    this.selectedModel = model;
    console.log('Selected LLM model:', model);
  }
}
