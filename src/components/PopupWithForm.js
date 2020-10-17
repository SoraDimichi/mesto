import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, keyNumber, { sendInputValues }) {
    super(popupSelector, keyNumber);
    this._sendInputValues = sendInputValues;

    this._form = this._popup.querySelector(".popup__form");
    this._firstInput = this._form.querySelector(
      ".popup__formInputText_firstInput"
    );
    this._secondInput = this._form.querySelector(
      ".popup__formInputText_secondInput"
    );
    this._formButton = this._form.querySelector(".popup__formSubmitButton");

    this._submit = (evt) => {
      evt.preventDefault();
      this._sendInputValues(this._getInputValues());
      this.close();
    };
  }

  _getInputValues() {
    return [
      {
        firstInput: this._firstInput.value,
        secondInput: this._secondInput.value,
      },
    ];
  }

  _cleanPopupForm() {
    if (
      !this._formButton.classList.contains("popup__formSubmitButton_disabled")
    ) {
      this._formButton.classList.add("popup__formSubmitButton_disabled");
      this._formButton.disabled = true;
    }

    this._secondInput.classList.remove("popup__formInputText_error");
    this._secondInput.value = "";

    this._firstInput.classList.remove("popup__formInputText_error");
    this._firstInput.value = "";

    this._popup
      .querySelectorAll(".popup__formInputError")
      .forEach((formInputError) => {
        formInputError.value = "";
        formInputError.textContent = "";
      });

    this._form.removeEventListener("submit", this._submit);
  }

  receiveInputValues(receivedValues) {
    this._firstInput.value = receivedValues[0].firstInput;
    this._secondInput.value = receivedValues[0].secondInput;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submit);
  }

  close() {
    super.close();
    this._cleanPopupForm();
  }

  open() {
    super.open();
    this.setEventListeners();
  }
}
