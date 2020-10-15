import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  _setCardInfo() {
    this._popup.querySelector(
      ".popup__lightBoxFigcaption"
    ).textContent = this._name;
    this._popup.querySelector(".popup__lightBoxImage").alt = this._name;
    this._popup.querySelector(".popup__lightBoxImage").src = this._link;
  }

  open() {
    this._setCardInfo();
    super.setEventListeners();
    super.open();
  }
}
