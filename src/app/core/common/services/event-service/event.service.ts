import { EventEmitter, Injectable } from '@angular/core';
import { SelectorOption } from '../../components/input-components/input-selector/input-selector.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public readonly userOptionsClickEvt = new EventEmitter<string>();

  public readonly selectorClickedEvt = new EventEmitter<{selectorId: string, selectedOption: SelectorOption}>();

  constructor() { }

  getUserOptionsClickedObservable() {
    return this.userOptionsClickEvt;
  }
  
  userOptionsClicked(optionId: string) {
    console.log('User option clicked:', optionId);
    this.userOptionsClickEvt.emit(optionId);
  }
}
