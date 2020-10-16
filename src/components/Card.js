export class Card {
  constructor(item, cardSelector, handleCardClick) {
    this._name = item.firstInput;
    this._link = item.secondInput;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _getCardInfo() {
    this._element
      .querySelectorAll(".element__image, .element__title")
      .forEach((el) => {
        el.addEventListener("click", (evt) => {
          if (
            evt.target !== this._element.querySelector(".element__removeButton")
          ) {
            return this._handleCardClick(this._name, this._link);
          }
        });
      });
  }

  _setEventListeners() {
    this._likeCard();
    this._removeCard();
    this._getCardInfo();
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

// // Функция создающая карточку
// const generateElement = (name, link) => {
//     // Клонируем темплейт карточки
//     const elementClone = element.cloneNode(true)
//
//     // Объявляем в константы элементы
//     const elementRemoveButton = elementClone.querySelector('.element__removeButton')
//     const elementLikeButton = elementClone.querySelector('.element__likeButton')
//     const elementTitle = elementClone.querySelector('.element__title')
//     const elementImage = elementClone.querySelector('.element__image')
//
//     // Накидываем значения на аргументы функции
//     elementClone.querySelector('.element__title').textContent = name
//     elementClone.querySelector('.element__image').alt = name
//     elementClone.querySelector('.element__image').src = link
//
//     // Функция удаления карточки на мусорном вердре
//     elementRemoveButton.addEventListener('click', () => {
//         elementClone.remove(elementClone)
//     })
//
//     // Функция таггла лайка на лайкокнопке
//     elementLikeButton.addEventListener('click', () => {
//         const LikeButtonImage = elementLikeButton.querySelector('.element__likeButtonImage')
//         LikeButtonImage.classList.toggle('element__likeButtonImage_toggled')
//     })
//
//     // Функция удаления карточки
//     elementRemoveButton.addEventListener('click', () => {
//         elementClone.remove(elementClone)
//     })
//
//     // функция создания лайтбокса
//
//
//     //возвращаем сгенерированную карточку
//     return elementClone
// }
