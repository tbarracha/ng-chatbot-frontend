import { Component } from '@angular/core';
import { BlankModalComponent } from '../../../common/components/blank-modal/blank-modal.component';
import { SelectorComponent } from '../../../common/components/selector/selector.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [BlankModalComponent, SelectorComponent],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

}
