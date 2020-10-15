export class FormValidator {
  constructor(validationElements, formElement) {
    this._inputSelector = validationElements.inputSelector;
    this._submitButtonSelector = validationElements.submitButtonSelector;
    this._inactiveButtonClass = validationElements.inactiveButtonClass;
    this._inputErrorClass = validationElements.inputErrorClass;
    this._errorClass = validationElements.errorClass;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}Error`
    );
    if (!inputElement.validity.valid) {
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
    } else {
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }

  _toggleButton(inputList, buttonElement) {
    const hasInvalidInput = (inputList) =>
      inputList.some((inputElement) => !inputElement.validity.valid);
    if (!hasInvalidInput(inputList)) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButton(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
