import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._lightBoxFigcaption = this._popup.querySelector('.popup__lightBoxFigcaption');
    this._lightBoxImage = this._popup.querySelector('.popup__lightBoxImage');
    this.open = this.open.bind(this);
  }

  _receiveCardInfo(data) {
    this._lightBoxFigcaption.textContent = data.name;
    this._lightBoxImage.alt = data.link;
    this._lightBoxImage.src = data.link;
  }

  open(data) {
    this._receiveCardInfo(data);
    super.open();
    super.setEventListeners();
  }
}
