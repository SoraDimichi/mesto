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

// Находим форму редактирования профиля внутри попапа
const editProfileForm = editProfilePopup.querySelector('.popup__form')
// Найдем поля ввода
const editProfileFormFirstInput = editProfileForm.querySelector('.popup__formInputText_firstInput')
const editProfileFormSecondInput = editProfileForm.querySelector('.popup__formInputText_secondInput')

// Находим кнопку добавления карточки
const addButton = document.querySelector('.profile__addButton')
// Находим попап добавления карточки
const addElementPopup = document.querySelector('.popup_addElement')


// Находим форму редактирования профиля внутри попапа
const addElementForm = addElementPopup.querySelector('.popup__form')
// Найдем поля ввода
const addElementFormFirstInput = addElementForm.querySelector('.popup__formInputText_firstInput')
const addElementFormSecondInput = addElementForm.querySelector('.popup__formInputText_secondInput')

// Находим лайтбокс внутри попапа
const lightBoxPopup = document.querySelector('.popup_lightBox')

// Объявляем все используемые элементы лайтбокса
const lightBoxImage = lightBoxPopup.querySelector('.popup__lightBoxImage')
const lightBoxFigcaption = lightBoxPopup.querySelector('.popup__lightBoxFigcaption')

// Находим все попапы и запишем их в массив
const popupsList = Array.from(document.querySelectorAll('.popup'))

// Функция тоггла попапа
const popupToggle = (el) => el.classList.toggle('popup_opened')

//Функция проверки открыт ли попап и добавления слушателя события кнопки esc
const popupKeyToggle = (popup) => {
    const keyHandler = (evt) => {
            if (evt.key === 'Escape') {
                popup.classList.remove('popup_opened')
                document.removeEventListener('keydown', keyHandler)
                if (!popup.classList.contains('popup_lightBox')) {
                    popupCleaner(popup)
                }
            }
        }
    document.addEventListener('keydown', keyHandler)
}

// Функция очистки полей, ошибок и блокировщик кнопки

const popupCleaner = (popup) => {

    const formInputs = popup.querySelectorAll('.popup__formInputText')
    const formInputErrors = popup.querySelectorAll('.popup__formInputError')
    const formButton = popup.querySelector('.popup__formSubmitButton')

    if (!formButton.classList.contains('popup__formSubmitButton_disabled')) {
        formButton.classList.add('popup__formSubmitButton_disabled')
        formButton.disabled = true
    }

    formInputs.forEach ((input) =>  {
        input.classList.remove('popup__formInputText_error')
        input.value = ''
    })

    formInputErrors.forEach ((formInputError) => {
        formInputError.classList = ''
        formInputError.textContent = ''
    })
}






// Функция закрытия попапа по крестику или полю за формой
popupsList.forEach((popup) => {
    // Найдем крестик в попапе
    const popupCloseButton = popup.querySelector('.popup__closeButton')
    // Добавим слушатель на попап
    popup.addEventListener('click', (evt) => {
        if ((evt.target !== evt.currentTarget) && (evt.target !== popupCloseButton)) {
            return
        }
        popupToggle(popup)
        if (!popup.classList.contains('popup_lightBox')) {
            popupCleaner(popup)
        }
    })
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
    elementRemoveButton.addEventListener('click', _ => {
        elementClone.remove(elementClone)
    })

    // Функция таггла лайка на лайкокнопке
    elementLikeButton.addEventListener('click', _ => {
        const LikeButtonImage = elementLikeButton.querySelector('.element__likeButtonImage')
        LikeButtonImage.classList.toggle('element__likeButtonImage_toggled')
    })

    // Функция удаления карточки
    elementRemoveButton.addEventListener('click', _ => {
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
                // вешаем тогглер на кнопку esc
                popupKeyToggle(lightBoxPopup)
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
editButton.addEventListener('click', _ => {
    // вешаем тогглер на кнопку esc
    popupKeyToggle(editProfilePopup)

    // Вставляем значения
    editProfileFormFirstInput.value = nameOutput.textContent
    editProfileFormFirstInput.placeholder = 'Имя'
    editProfileFormSecondInput.value = descriptionOutput.textContent
    editProfileFormSecondInput.placeholder = 'О себе'

    // Очищаем вэлью по клику
    editProfileFormFirstInput.addEventListener('click', _ => editProfileFormFirstInput.value = '')
    editProfileFormSecondInput.addEventListener('click', _ => editProfileFormSecondInput.value = '')


    // Открываем попап
    popupToggle(editProfilePopup)
})

// Открытие формы добавления карточки по кнопке
addButton.addEventListener('click', _ => {
    // вешаем тогглер на кнопку esc
    popupKeyToggle(addElementPopup)

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
    popupCleaner(editProfilePopup)
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



    // Закрываем попап
    popupCleaner(addElementPopup)
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