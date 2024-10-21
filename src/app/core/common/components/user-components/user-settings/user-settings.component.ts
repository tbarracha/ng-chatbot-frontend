import { Component } from '@angular/core';
import { BlankModalComponent } from "../../blank-modal/blank-modal.component";
import { SelectorComponent } from "../../selector/selector.component";

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [BlankModalComponent, SelectorComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

}
