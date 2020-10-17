import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector, keyNumber) {
    super(popupSelector, keyNumber);

    this._lightBoxFigcaption = this._popup.querySelector(
      ".popup__lightBoxFigcaption"
    );
    this._lightBoxImage = this._popup.querySelector(".popup__lightBoxImage");
  }

  _receiveCardInfo(cardInfo) {
    this._lightBoxFigcaption.textContent = cardInfo[0].firstInput;
    this._lightBoxImage.alt = cardInfo[0].secondInput;
    this._lightBoxImage.src = cardInfo[0].secondInput;
  }

  open(cardInfo) {
    this._receiveCardInfo(cardInfo);
    super.open();
    super.setEventListeners();
  }
}
