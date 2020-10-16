export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._bindeHandleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._bindeHandleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._bindeHandleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target !== evt.currentTarget &&
        evt.target !== this._popup.querySelector(".popup__closeButton")
      ) {
        return;
      }
      this.close();
    });
  }
}
