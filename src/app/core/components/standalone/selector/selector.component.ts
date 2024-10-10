import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectorOption } from '../../../models/standalone-models';
import { BaseThemedComponent } from '../base-themed-component/base-themed-component.component';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [],
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent extends BaseThemedComponent {
  @Input() options: SelectorOption[] = [];
  @Output() selectionChange = new EventEmitter<SelectorOption>();

  currentSelection: SelectorOption | null = null;

  // Method to handle selection change
  onSelectionChange(event: Event) {
    const selectedId = (event.target as HTMLSelectElement).value;
    const selectedOption = this.options.find(option => option.id.toString() === selectedId);
    if (selectedOption) {
      this.currentSelection = selectedOption;
      this.selectionChange.emit(selectedOption);
    }
  }
}
