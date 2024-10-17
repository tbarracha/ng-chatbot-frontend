import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';

export class SelectorOption {
  id: number;
  value: string;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
  }
}

@Component({
  selector: 'app-selector',
  standalone: true,
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  @ViewChild('selector', { static: false }) selectorRef!: ElementRef;

  @Input() defaultMessage: string = 'Select an option';
  @Input() options: SelectorOption[] = [];
  @Output() selectionChange = new EventEmitter<SelectorOption>();

  currentSelection: SelectorOption | null = null;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: SelectorOption) {
    this.currentSelection = option;
    this.selectionChange.emit(option);
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.selectorRef) {
      return;
    }

    const clickedInside = this.selectorRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }
}
