export class Card {

    constructor(initialCards, cardSelector) {
        this._name = initialCards.name
        this._link = initialCards.link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
    }

    _removeCard(cardClone) {
        cardClone.querySelector('.element__removeButton').addEventListener('click', () => {
            cardClone.remove(this._element)
        })
    }

    _likeCard(cardClone) {
        cardClone.querySelector('.element__likeButton').addEventListener('click', () => {
            cardClone.querySelector('.element__likeButtonImage')
                .classList
                .toggle('element__likeButtonImage_toggled')
        })
    }

    _setEventListeners(cardClone) {
        this._likeCard(cardClone)
        this._removeCard(cardClone)
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__title').textContent = this._name

        this._element.querySelector('.element__image').alt = this._name
        this._element.querySelector('.element__image').src = this._link

        this._setEventListeners(this._element)

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



