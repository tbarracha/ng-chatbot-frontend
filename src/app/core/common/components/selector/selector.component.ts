import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../services/event-service/event.service';

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
  @Input() selectorId: string = '';
  @Input() options: SelectorOption[] = [];
  @Input() defaultSelectionID: number = -1;
  @Output() selectionChange = new EventEmitter<SelectorOption>();

  currentSelection: SelectorOption | null = null;
  isDropdownOpen = false;

  constructor(protected readonly eventService: EventService) {
    eventService.selectorClickedEvt.subscribe((event) => this.filterSelectorEvent(event.selectorId, event.selectedOption));
  }

  ngOnInit() {
    this.setDefaultSelection();
  }

  setDefaultSelection() {
    if (this.defaultSelectionID !== -1) {
      const defaultSelection = this.options.find(option => option.id === this.defaultSelectionID);
      if (defaultSelection) {
        this.currentSelection = defaultSelection;
      }
    }
  }

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectOption(option: SelectorOption) {
    this.currentSelection = option;
    this.selectionChange.emit(option);
    this.eventService.selectorClickedEvt.emit({selectorId: this.selectorId, selectedOption: option});
    this.isDropdownOpen = false;
  }

  public selectOptionByID(id: number) {
    const option = this.options.find(option => option.id === id);
    if (option) {
      this.selectOption(option);
    }
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

  protected filterSelectorEvent(selectorId: string, selectedOption: SelectorOption): void {}
}
