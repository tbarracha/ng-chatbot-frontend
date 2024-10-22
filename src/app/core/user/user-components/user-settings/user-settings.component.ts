import { Component } from '@angular/core';
import { BlankModalComponent } from '../../../common/components/blank-modal/blank-modal.component';
import { InputSelectorComponent } from '../../../common/components/input-components/input-selector/input-selector.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [BlankModalComponent, InputSelectorComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

}
