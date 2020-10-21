import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { sendInputValues }) {
    super(popupSelector);
    this._sendInputValues = sendInputValues;

    this._form = this._popup.querySelector('.popup__form');
    this._firstInput = this._form.querySelector('.popup__formInputText_firstInput');
    this._secondInput = this._form.querySelector('.popup__formInputText_secondInput');
    this._formButton = this._form.querySelector('.popup__formSubmitButton');

    this._submit = this._submit.bind(this);
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

  _submit(evt) {
    evt.preventDefault();
    this._sendInputValues(this._getInputValues());
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

  _resetPopupForm() {
    if (!this._formButton.classList.contains('popup__formSubmitButton_disabled')) {
      this._formButton.classList.add('popup__formSubmitButton_disabled');
      this._formButton.disabled = true;
    }
  }
  _resetErrors() {
    this._popup.querySelectorAll('.popup__formInputText').forEach((formInputText) => {
      formInputText.classList.remove('popup__formInputText_error');
      formInputText.value = '';
    });
  }

  _cleanPopupForm() {
    this._resetErrors();
    this._resetPopupForm();
    this._form.reset();
    this._form.removeEventListener('submit', this._submit);
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
