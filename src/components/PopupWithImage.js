import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)

    this._lightBoxFigcaption = this._popup.querySelector('.popup__lightBoxFigcaption')
    this._lightBoxImage = this._popup.querySelector('.popup__lightBoxImage')
  }

  _receiveCardInfo({ name, link }) {
    this._lightBoxFigcaption.textContent = name
    this._lightBoxImage.alt = link
    this._lightBoxImage.src = link
  }

  open({ name, link }) {
    this._receiveCardInfo({ name, link })
    super.open()
    super.setEventListeners()
  }
}
