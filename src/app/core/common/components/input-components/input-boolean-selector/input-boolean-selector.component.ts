import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';

export class BooleanSelectorOptions {
    id: number;
    name: string;
    value: boolean;
  
    constructor(id: number, name: string, value: boolean) {
      this.id = id;
      this.name = name;
      this.value = value;
    }
}

@Component({
  selector: 'app-input-boolean-selector',
  standalone: true,
  imports: [],
  templateUrl: './input-boolean-selector.component.html',
  styleUrl: './input-boolean-selector.component.scss'
})
export class InputBooleanSelectorComponent extends InputBaseComponent<BooleanSelectorOptions> {
  @ViewChild('selector', { static: false }) selectorRef!: ElementRef;

  @Input() booleanValue: boolean = false;
  @Input() defaultMessage: string = 'Select an option';
  @Input() options: BooleanSelectorOptions[] = [
    new BooleanSelectorOptions(1, 'True', true),
    new BooleanSelectorOptions(2, 'False', false)
  ];
  @Input() defaultSelectionID: number = -1;

  currentSelection: BooleanSelectorOptions | null = null;
  isDropdownOpen = false;

  get valueAsBoolean(): boolean {
    return this.currentSelection?.value ?? false;
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.refreshCurrentValue();
  }

  afterViewInit() {
    this.refreshCurrentValue();
  }

  refreshCurrentValue() {
    this.setDefaultSelection();
    //this.setValue();
    this.setBooleanValueSelection();
  }

  setDefaultSelection() {
    if (this.defaultSelectionID !== -1) {
      const targetOption = this.options.find(option => option.id === this.defaultSelectionID);
      if (targetOption) {
        this.currentSelection = targetOption;
      }
    }
  }

  setValue() {
    if (this.value !== null && this.value !== undefined) {
      const targetOption = this.options.find(option =>
        option.value === (typeof this.value === 'boolean')
      );
      if (targetOption) {
        this.currentSelection = targetOption;
      }
    }
  }

  setBooleanValueSelection() {
    if (this.booleanValue !== null && this.booleanValue !== undefined) {
      const targetOption = this.options.find(option => option.value === this.booleanValue);
      if (targetOption) {
        this.currentSelection = targetOption;
      }
    }
  }
  
  

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectOption(option: BooleanSelectorOptions) {
    this.currentSelection = option;
    this.onValueChange.emit(option);
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
}
