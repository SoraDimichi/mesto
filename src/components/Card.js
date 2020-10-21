export class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleCardLike }, cardSelector, userId) {
    this._data = data;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._likes = data.likes;
    this._name = data.name;
    this._link = data.link;
    this._handleLike = handleCardLike;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _setDeleteIcon() {
    if (this._ownerId !== this._userId) {
      this._deleteCardButton.remove();
      this._deleteCardButton = null;
    }
  }

  _getLikesCount() {
    this._likeCounter.textContent = this._likes.length;
  }

  _toggleLike() {
    this._handleLike(
      this._cardId,
      this._likes.some((item) => item._id === this._userId)
    )
      .then((result) => {
        this._likes = result.likes;
        this._likeCounter.textContent = this._likes.length;
        this._likeButton.classList.toggle('element__likeButton_toggled');
      })
      .catch((err) => console.log(err));
  }

  _setUserLikes() {
    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeButton.classList.add('element__likeButton_toggled');
    }
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._toggleLike());
    this._deleteCardButton.addEventListener('click', () => {
      this._handleDeleteClick({
        id: this._cardId,
        deleteCard: this._deleteCard.bind(this),
      });
    });
    this._element.querySelectorAll('.element__image, .element__title').forEach((el) => {
      el.addEventListener('click', (evt) => {
        if (evt.target !== this._deleteCardButton) {
          this._handleCardClick(this._data);
        }
      });
    });
  }

  _getNodes() {
    this._likeCounter = this._element.querySelector('.element__likeCounter');
    this._deleteCardButton = this._element.querySelector('.element__removeButton');
    this._cardPhoto = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__likeButton');
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);
  }

  _setCardInfo() {
    this._cardPhoto.alt = this._name;
    this._cardPhoto.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  generateCard() {
    this._getTemplate();
    this._getNodes();
    this._setEventListeners();
    this._setDeleteIcon();
    this._getLikesCount();
    this._setUserLikes();
    this._setCardInfo();
    return this._element;
  }
}
