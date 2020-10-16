import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._bindedSubmit = this._submit.bind(this);
  }

  _submit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  _getInputValues() {
    this._formValues = [
      {
        firstInput: this._popup.querySelector(
          ".popup__formInputText_firstInput"
        ).value,
        secondInput: this._popup.querySelector(
          ".popup__formInputText_secondInput"
        ).value,
      },
    ];

    return this._formValues;
  }

  _cleanPopupForm() {
    if (
      !this._popup
        .querySelector(".popup__formSubmitButton")
        .classList.contains("popup__formSubmitButton_disabled")
    ) {
      this._popup
        .querySelector(".popup__formSubmitButton")
        .classList.add("popup__formSubmitButton_disabled");
      this._popup.querySelector(".popup__formSubmitButton").disabled = true;
    }

    this._popup.querySelectorAll(".popup__formInputText").forEach((input) => {
      input.classList.remove("popup__formInputText_error");
      input.value = "";
    });

    this._popup
      .querySelectorAll(".popup__formInputError")
      .forEach((formInputError) => {
        formInputError.value = "";
        formInputError.textContent = "";
      });

    this._popup
      .querySelector(".popup__form")
      .removeEventListener("submit", this._bindedSubmit);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__form")
      .addEventListener("submit", this._bindedSubmit);
  }

  close() {
    super.close();
    this._cleanPopupForm();
  }

  open() {
    this.setEventListeners();
    super.open();
  }
}
