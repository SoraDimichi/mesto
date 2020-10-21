import { Popup } from './Popup.js';

export class PopupRemoveCard extends Popup {
  constructor(popupSelector, { confirmRemoval }) {
    super(popupSelector);
    this._confirmRemoval = confirmRemoval;

    this._form = this._popup.querySelector('.popup__form');
    this._formButton = this._form.querySelector('.popup__formSubmitButton');
    this._submit = this._submit.bind(this);
  }

  _submit(evt) {
    evt.preventDefault();
    this._confirmRemoval({
      id: this._id,
      deleteCard: this._deleteCard,
    });
  }

  _setEventListeners() {
    this._form.addEventListener('submit', this._submit);
  }

  _cleanPopupForm() {
    this._form.reset();
    this._form.removeEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._cleanPopupForm();
  }

  _receiveCardInfo(data) {
    this._id = data.id;
    this._deleteCard = data.deleteCard;
  }

  open(data) {
    super.open();
    this._receiveCardInfo(data);
    super.setEventListeners();
    this._setEventListeners();
  }
}
