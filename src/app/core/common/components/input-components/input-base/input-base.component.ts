import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-base',
  standalone: true,
  imports: [],
  templateUrl: './input-base.component.html',
  styleUrl: './input-base.component.scss'
})
export abstract class InputBaseComponent<T> {
  @Input() inputID: string = '';
  @Input() value: T | null = null;
  
  @Output() onValueChange = new EventEmitter<T>();
}
