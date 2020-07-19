//Найдем попап
const popup = document.querySelector('.popup')

//Функция открытия попапа
const OpenPopup = () => {
popup.classList.add('popup_opened')
popup.classList.remove('popup_hidden')
}

//функция закрытия попапа
const popupClose = function () {
    popup.classList.add('popup_hidden')
    popup.classList.remove('popup_opened')
    popup.lastChild.remove()
}

//Закрытие по крестику
const popupCloseButton = popup.querySelector('.popup__closeButton') // Найдем кнопку крестик
popupCloseButton.addEventListener('click', () => {
    popupClose()
})

//Закрытие при клике по любому месту кроме popup__form
popup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    popupClose()
})


const elements = document.querySelector('.elements')

const generateElement = (name, link) => {
    // Находим темплейт карточки и клонируем
    const elementTemplate = document.querySelector('#element').content
    const element = elementTemplate.querySelector('.element')
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

    //функция удаления карточки на мусорном вердре
    elementRemoveButton.addEventListener('click', () => {
        elementClone.remove(elementClone)
    })

    //функция тоггла лайка на лайкокнопке
    elementLikeButton.addEventListener('click', () => {
        const LikeButtonImage = elementLikeButton.querySelector('.element__likeButtonImage')
        switch (LikeButtonImage.src.includes('element__likeButtonImage.svg')) {
            case true:
                LikeButtonImage.src = './blocks/element/images/__likeButton/element__likeButtonImageToggled.svg'
                break;
            case false:
                LikeButtonImage.src = './blocks/element/images/__likeButton/element__likeButtonImage.svg'
                break;
        }
    })
    //функция создания лайтбокса и параллельно удаления карточки, что бы не возникало конфликтов
    const elementLiteBoxListeners = elementClone.querySelectorAll('.element__image, .element__title')
    elementLiteBoxListeners.forEach ((listener) => {
        listener.addEventListener('click', (evt) => {
            switch (evt.target !== elementRemoveButton) {
                case true:
                    // Находим темплейт лайтбокса и клонируем
                    const lightBoxTemplate = document.querySelector('#popup__lightBox').content
                    const lightBox = lightBoxTemplate.querySelector('.popup__lightBox')
                    const lightBoxClone = lightBox.cloneNode(true)
                    // Объявляем в константы элементы
                    const lightBoxFigcaption = lightBoxClone.querySelector('.popup__lightBoxFigcaption')
                    const lightBoxImage = lightBoxClone.querySelector('.popup__lightBoxImage')
                    // Накидываем значения на аргументы функции
                    lightBoxFigcaption.textContent = elementTitle.textContent
                    lightBoxImage.alt = elementImage.alt
                    lightBoxImage.src = elementImage.src
                    // Клонируем лайтбокс
                    popup.append(lightBoxClone)
                    // Открываем попап
                    OpenPopup()
                    break;
                case false:
                    elementClone.remove(elementClone)
                    break;
            }
        })
    })
    elements.prepend(elementClone) //вставляем полностью собранную карточку (Не придумал как вращать форму)
}

// Цепляем на обе кнопки эвентлистенер
const openPopup = document.querySelectorAll('.profile__openPopupButton, .profile__addButton')

openPopup.forEach ((button) => {
    button.addEventListener('click', (evt) => {
        // evt.target.setAttribute('disabled', true); // выключаем кнопку по нажатию
        const formTemplate = document.querySelector('#popup__form').content // Находим всё внутри тэмплэйта формы
        const form = formTemplate.querySelector('.popup__form') // Находим форму
        const formClone = form.cloneNode(true) // Клонируем форму

        // Генерим форму

        // цепляем на каждый элемент формы константу
        const formTitle = formClone.querySelector('.popup__formTitle')
        const formFirstInput = formClone.querySelector('.popup__formInputText_typeFirstInput')
        const formSecondInput = formClone.querySelector('.popup__formInputText_typeSecondInput')
        const formSubmitButton = formClone.querySelector('.popup__formSubmitButton')

        // Турбопроверка нажатой кнопки
        // Цепляем возможные кнопки на константы
        const editButton = document.querySelector('.profile__openPopupButton')
        const addButton = document.querySelector('.profile__addButton')

        // Проверяем какая кнопка нажата и в зависимости от этого генерим формы

        switch (evt.target) {
            case editButton: // кнопка исправления профиля
                // Цепанем на константы аутпуты в профиле
                const nameOutput = document.querySelector('.profile__name')
                const descriptionOutput = document.querySelector('.profile__description')

                //Заполняем объявленные элементы
                formTitle.textContent = 'Редактировать профиль'
                formFirstInput.value = nameOutput.textContent
                formSecondInput.value = descriptionOutput.textContent
                formSubmitButton.value = 'Отправить'
                // Создаем клон

                // Вешаем эвэнт листенер на сабмит
                formClone.addEventListener('submit',function (event) {
                    event.preventDefault()
                    if (confirm(`                Вы ввели:
                Имя: ${formFirstInput.value}
                Описание: ${formSecondInput.value}
                Подтвердите правильность ввовда:`) === true) {
                        nameOutput.textContent = formFirstInput.value
                        descriptionOutput.textContent = formSecondInput.value
                        popupClose()
                    }
                })
                break;
            case addButton: // кнопка добавления карточки
                //Заполняем объявленные элементы
                formTitle.textContent = 'Новое место'
                formFirstInput.placeholder = 'Название'
                formFirstInput.title = 'Название'
                formSecondInput.placeholder = 'Ссылка на картинку'
                formSecondInput.title = 'Ссылка на картинку'
                formSubmitButton.value = 'Создать'

                formClone.addEventListener('submit',(evt) => {
                    evt.preventDefault()
                    if (confirm(`                Вы ввели:
                Название: ${formFirstInput.value}
                Ссылку: ${formSecondInput.value}
                Подтвердите правильность ввовда:`) === true) {
                        // Записываем в массив последнее значение (представляем, что это база данных за 300 и нам важно сохранять значения)
                        initialCards.push({
                            name: formFirstInput.value,
                            link: formSecondInput.value
                        })
                        const name = initialCards[initialCards.length - 1].name
                        const link = initialCards[initialCards.length - 1].link
                        generateElement(name, link)
                        popupClose()
                        }
                })
        }
        popup.append(formClone)
        OpenPopup()
    })
})

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

// Заполнение карточек из массива
initialCards.forEach ((el) => {
    generateElement(el.name, el.link)
})

