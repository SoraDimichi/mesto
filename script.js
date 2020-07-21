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

// Функция тоггла попапа редактирования профиля
const editProfilePopupToggle = () => {
    editProfilePopup.classList.toggle('popup_opened')
}
// Функция тоггла попапа добавления карточки
const addElementPopupToggle = () => {
    addElementPopup.classList.toggle('popup_opened')
}
// Функция тоггла попапа лайтбокса
const lightBoxPopupToggle = () => {
    lightBoxPopup.classList.toggle('popup_opened')
}

// Закрытие по крестику попапа добавления карточки
addElementPopupCloseButton.addEventListener('click', () => {
    addElementPopupToggle()
})
// Закрытие по крестику попапа редактирования профиля
editProfilePopupCloseButton.addEventListener('click', () => {
    editProfilePopupToggle()
})
// Закрытие по крестику попапа лайтбокса
lightBoxPopupCloseButton.addEventListener('click', () => {
    lightBoxPopupToggle()
})

// Закрытие при клике по любому месту кроме формы добавления элемента
addElementPopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    addElementPopupToggle()
})
// Закрытие при клике по любому месту кроме формы исправления формы
editProfilePopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    editProfilePopupToggle()
})
// Закрытие при клике по любому месту кроме лайтбокса
lightBoxPopup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    lightBoxPopupToggle()
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

    // Функция тоггла лайка на лайкокнопке
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
    elementLiteBoxListeners.forEach ((listener) => {
        listener.addEventListener('click', (evt) => {
            if (evt.target !== elementRemoveButton) {
                // Накидываем значения на аргументы функции
                lightBoxFigcaption.textContent = elementTitle.textContent
                lightBoxImage.alt = elementImage.alt
                lightBoxImage.src = elementImage.src

                // Открываем попап лайтбокса
                lightBoxPopupToggle()
            }
        })
    })

    //возвращаем сгенерированную карточку
    return elementClone
}

// Открытие формы исправления профиля по кнопке
editButton.addEventListener('click', () => {

    // Вставляем значения
    editProfileFormFirstInput.value = nameOutput.textContent
    editProfileFormFirstInput.placeholder = nameOutput.textContent
    editProfileFormSecondInput.value = descriptionOutput.textContent
    editProfileFormSecondInput.placeholder = nameOutput.textContent

    // Открываем попап
    editProfilePopupToggle()
})

// Открытие формы добавления карточки по кнопке
addButton.addEventListener('click', () => {
    // Открываем попап
    addElementPopupToggle()
})

// Редактирование профиля по сабмиту
editProfileForm.addEventListener('submit',  (evt) => {
    evt.preventDefault()

    // Переносим значения из профиля
    nameOutput.textContent = editProfileFormFirstInput.value
    descriptionOutput.textContent = editProfileFormSecondInput.value

    // Закрываем попап
    editProfilePopupToggle()
})

// Создание карточки по сабмиту
addElementForm.addEventListener('submit',(evt) => {
    evt.preventDefault()

    // Объявляем имя и ссылку в константы
    const name = addElementFormFirstInput.value
    const link = addElementFormSecondInput.value

    // Вставляем полностью собранную карточку
    elements.prepend(generateElement(name, link))

    // Обнулим значения формы для следующего вызова
    addElementFormFirstInput.value = ''
    addElementFormSecondInput.value = ''

    // Закрываем попап
    addElementPopupToggle()
})


// Заполнение карточек из массива
initialCards.forEach ((el) => {
    //вставляем полностью собранную карточку
    elements.prepend(generateElement(el.name, el.link))
})