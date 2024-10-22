import { Component } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'app-input-toggle',
  standalone: true,
  imports: [],
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./input-toggle.component.scss']
})
export class InputToggleComponent extends InputBaseComponent<boolean> {

  toggle() {
    this.value = !this.value;
    this.onValueChange.emit(this.value);
  }
}
