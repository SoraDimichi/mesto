// Массив карточек по умолчанию
const initialCards = [
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
];

// Находим родитель куда будут вставляться карточки
const elements = document.querySelector('.elements')
// Находим темплейт карточки
const elementTemplate = document.querySelector('#element').content
const element = elementTemplate.querySelector('.element')

// Цепанем на константы аутпуты в профиле
const nameOutput = document.querySelector('.profile__name')
const descriptionOutput = document.querySelector('.profile__description')

// Находим кнопку редактирования профиля
const editButton = document.querySelector('.profile__openPopupButton')
// Находим попап редактирования профиля
const editProfilePopup = document.querySelector('.popup_editProfile')
// Крестик закрытия попапа
const editProfilePopupCloseButton = editProfilePopup.querySelector('.popup__closeButton')
// Находим форму редактирования профиля внутри попапа
const editProfileForm = editProfilePopup.querySelector('.popup__form')
// Найдем поля ввода
const editProfileFormFirstInput = editProfileForm.querySelector('.popup__formInputText_firstInput')
const editProfileFormSecondInput = editProfileForm.querySelector('.popup__formInputText_secondInput')

// Находим кнопку добавления карточки
const addButton = document.querySelector('.profile__addButton')
// Находим попап добавления карточки
const addElementPopup = document.querySelector('.popup_addElement')
// Крестик закрытия попапа
const addElementPopupCloseButton = addElementPopup.querySelector('.popup__closeButton')
// Находим форму редактирования профиля внутри попапа
const addElementForm = addElementPopup.querySelector('.popup__form')
// Найдем поля ввода
const addElementFormFirstInput = addElementForm.querySelector('.popup__formInputText_firstInput')
const addElementFormSecondInput = addElementForm.querySelector('.popup__formInputText_secondInput')

// Находим лайтбокс внутри попапа
const lightBoxPopup = document.querySelector('.popup_lightBox')
// Крестик закрытия попапа
const lightBoxPopupCloseButton = lightBoxPopup.querySelector('.popup__closeButton')
// Объявляем все используемые элементы лайтбокса
const lightBoxImage = lightBoxPopup.querySelector('.popup__lightBoxImage')
const lightBoxFigcaption = lightBoxPopup.querySelector('.popup__lightBoxFigcaption')




// Функция тоггла попапа
const popupToggle = (el) => {
    el.classList.toggle('popup_opened')
}

// Закрытие по крестику попапа добавления карточки
addElementPopupCloseButton.addEventListener('click', () => {
    popupToggle(addElementPopup)
})
// Закрытие по крестику попапа редактирования профиля
editProfilePopupCloseButton.addEventListener('click', () => {
    popupToggle(editProfilePopup)
})
// Закрытие по крестику попапа лайтбокса
lightBoxPopupCloseButton.addEventListener('click', () => {
    popupToggle(lightBoxPopup)
})

const popupsList = Array.from(document.querySelectorAll('.popup__closeButton'))
popupsList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target !== evt.currentTarget) {
            return
        }
        popupToggle(popup)
    })
})


// Закрытие при клике по любому месту кроме формы добавления элемента
addElementPopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    popupToggle(addElementPopup)
})
// Закрытие при клике по любому месту кроме формы исправления формы
editProfilePopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    popupToggle(editProfilePopup)
})
// Закрытие при клике по любому месту кроме лайтбокса
lightBoxPopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    popupToggle(lightBoxPopup)
})

// Функция создающая карточку
const generateElement = (name, link) => {
    // Клонируем темплейт карточки
    const elementClone = element.cloneNode(true)

    // Объявляем в константы элементы
    const elementRemoveButton = elementClone.querySelector('.element__removeButton')
    const elementLikeButton = elementClone.querySelector('.element__likeButton')
    const elementTitle = elementClone.querySelector('.element__title')
    const elementImage = elementClone.querySelector('.element__image')

    // Накидываем значения на аргументы функции
    elementTitle.textContent = name
    elementImage.alt = name
    elementImage.src = link

    // Функция удаления карточки на мусорном вердре
    elementRemoveButton.addEventListener('click', () => {
        elementClone.remove(elementClone)
    })

    // Функция таггла лайка на лайкокнопке
    elementLikeButton.addEventListener('click', () => {
        const LikeButtonImage = elementLikeButton.querySelector('.element__likeButtonImage')
        LikeButtonImage.classList.toggle('element__likeButtonImage_toggled')
    })

    // Функция удаления карточки
    elementRemoveButton.addEventListener('click', () => {
        elementClone.remove(elementClone)
    })

    // функция создания лайтбокса
    const elementLiteBoxListeners = elementClone.querySelectorAll('.element__image, .element__title')
    elementLiteBoxListeners.forEach ((el) => {
        el.addEventListener('click', (evt) => {
            if (evt.target !== elementRemoveButton) {
                // Накидываем значения на аргументы функции
                lightBoxFigcaption.textContent = elementTitle.textContent
                lightBoxImage.alt = elementImage.alt
                lightBoxImage.src = elementImage.src

                // Открываем попап лайтбокса
                popupToggle(lightBoxPopup)
            }
        })
    })

    //возвращаем сгенерированную карточку
    return elementClone
}

//функция добавления сгенерированной карточки в начало родителя
const addElementToStart = (card) => {
    elements.prepend(card)
}

// Открытие формы исправления профиля по кнопке
editButton.addEventListener('click', () => {

    // Вставляем значения
    editProfileFormFirstInput.value = nameOutput.textContent
    editProfileFormFirstInput.placeholder = nameOutput.textContent
    editProfileFormSecondInput.value = descriptionOutput.textContent
    editProfileFormSecondInput.placeholder = nameOutput.textContent

    // Открываем попап
    popupToggle(editProfilePopup)
})

// Открытие формы добавления карточки по кнопке
addButton.addEventListener('click', () => {
    // Открываем попап
    popupToggle(addElementPopup)
})


// Редактирование профиля по сабмиту
editProfileForm.addEventListener('submit',  (evt) => {
    evt.preventDefault()

    // Переносим значения из профиля
    nameOutput.textContent = editProfileFormFirstInput.value
    descriptionOutput.textContent = editProfileFormSecondInput.value

    // Закрываем попап
    popupToggle(editProfilePopup)
})

// Создание карточки по сабмиту
addElementForm.addEventListener('submit',(evt) => {
    evt.preventDefault()

    // Объявляем имя и ссылку в константы
    const name = addElementFormFirstInput.value
    const link = addElementFormSecondInput.value

    // Вставляем полностью собранную карточку
    addElementToStart(generateElement(name, link))

    // Обнулим значения формы для следующего вызова
    addElementFormFirstInput.value = ''
    addElementFormSecondInput.value = ''

    // Закрываем попап
    popupToggle(addElementPopup)
})

// Заполнение карточек из массива
initialCards.forEach ((el) => {
    // Объявляем имя и ссылку в константы
    const name = el.name
    const link = el.link
    //вставляем полностью собранную карточку
    addElementToStart(generateElement(name, link))
})