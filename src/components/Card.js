export class Card {
  constructor(item, cardSelector, { sendCardInfo }) {
    this._name = item.firstInput;
    this._link = item.secondInput;
    this._cardSelector = cardSelector;
    this._sendCardInfo = sendCardInfo;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _removeCard() {
    this._element
      .querySelector(".element__removeButton")
      .addEventListener("click", () => {
        this._element.remove(this._element);
      });
  }

  _likeCard() {
    this._element
      .querySelector(".element__likeButton")
      .addEventListener("click", () => {
        this._element
          .querySelector(".element__likeButtonImage")
          .classList.toggle("element__likeButtonImage_toggled");
      });
  }

  _returnCardInfo() {
    return [
      {
        firstInput: this._name,
        secondInput: this._link,
      },
    ];
  }

  _handleCardClick() {
    this._element
      .querySelectorAll(".element__image, .element__title")
      .forEach((el) => {
        el.addEventListener("click", (evt) => {
          if (
            evt.target !== this._element.querySelector(".element__removeButton")
          ) {
            this._sendCardInfo(this._returnCardInfo());
          }
        });
      });
  }

  _setEventListeners() {
    this._likeCard();
    this._removeCard();
    this._handleCardClick();
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__title").textContent = this._name;

    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__image").src = this._link;

    this._setEventListeners();

    return this._element;
  }
}
