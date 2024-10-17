import { Component } from '@angular/core';
import { AvatarType } from '../../models/enums';

@Component({
  selector: 'app-entity-avatar',
  standalone: true,
  imports: [],
  templateUrl: './entity-avatar.component.html',
  styleUrl: './entity-avatar.component.scss'
})
export class EntityAvatarComponent {
  avatarType: AvatarType = AvatarType.Image;
  imgSrc: string = '';
  svgIcon: string = '';
}
