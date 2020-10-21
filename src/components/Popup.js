import { escapeCode } from '../utils/constants.js';

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.keyCode === escapeCode) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (
        evt.target !== evt.currentTarget &&
        evt.target !== this._popup.querySelector('.popup__closeButton')
      ) {
        return;
      }
      this.close();
    });
  }
}
