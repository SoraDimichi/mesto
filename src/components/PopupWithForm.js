import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { sendInputValues }) {
    super(popupSelector);
    this._sendInputValues = sendInputValues;

    this._form = this._popup.querySelector('.popup__form');
    this._firstInput = this._form.querySelector('.popup__formInputText_firstInput');
    this._secondInput = this._form.querySelector('.popup__formInputText_secondInput');
    this._formButton = this._form.querySelector('.popup__formSubmitButton');

    this._submit = (evt) => {
      evt.preventDefault();
      this._sendInputValues(this._getInputValues());
      this.close();
    };
  }

  _cleanPopupForm() {
    if (!this._formButton.classList.contains('popup__formSubmitButton_disabled')) {
      this._formButton.classList.add('popup__formSubmitButton_disabled');
      this._formButton.disabled = true;
    }

    this._popup.querySelectorAll('.popup__formInputText').forEach((formInputText) => {
      formInputText.classList.remove('popup__formInputText_error');
      formInputText.value = '';
    });

    this._popup.querySelectorAll('.popup__formInputError').forEach((formInputError) => {
      formInputError.value = '';
      formInputError.textContent = '';
    });

    this._form.removeEventListener('submit', this._submit);
  }

  _getInputValues() {
    if (this._popup.querySelectorAll('.popup__formInputText').length === 2) {
      return {
        firstInput: this._firstInput.value,
        secondInput: this._secondInput.value,
      };
    } else {
      return {
        firstInput: this._firstInput.value,
      };
    }
  }

  setLoading(status) {
    if (status) {
      this._formButton.value = 'Сохранение...';
    } else {
      this._formButton.value = 'Сохранить';
    }
  }

  receiveInputValues({ name, about }) {
    this._firstInput.value = name;
    this._secondInput.value = about;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
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
