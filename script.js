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
// Цепанем на константы аутпуты в профиле
const nameOutput = document.querySelector('.profile__name')
const descriptionOutput = document.querySelector('.profile__description')
// Находим родитель куда будут вставляться карточки
const elements = document.querySelector('.elements')
// Находим темплейт карточки
const elementTemplate = document.querySelector('#element').content
const element = elementTemplate.querySelector('.element')

// Найдем попап, куда будут вставляться контейнеры, в зависимости от нажатой кнопки
const popup = document.querySelector('.popup')
// Крестик закрытия попапа
const popupCloseButton = popup.querySelector('.popup__closeButton')

// Находим кнопку редактирования профиля
const editButton = document.querySelector('.profile__openPopupButton')
// Находим форму редактирования профиля внутри попапа
const formEditProfile = popup.querySelector('.popup__form_editProfile')
// Цепляем на каждый элемент формы константу
const formEditProfileFirstInput = formEditProfile.querySelector('.popup__formInputText_firstInput')
const formEditProfileSecondInput = formEditProfile.querySelector('.popup__formInputText_secondInput')

// Находим кнопку добавления карточки
const addButton = document.querySelector('.profile__addButton')
// Находим форму добавления карточки внутри попапа
const formAddElement = popup.querySelector('.popup__form_addElement')
// Цепляем на каждый элемент формы константу
const formAddElementFirstInput = formAddElement.querySelector('.popup__formInputText_firstInput')
const formAddElementSecondInput = formAddElement.querySelector('.popup__formInputText_secondInput')

// Находим лайтбокс внутри попапа
const lightBox = popup.querySelector('.popup__lightBox')
// Объявляем все элементы лайтбокса
const lightBoxImage = lightBox.querySelector('.popup__lightBoxImage')
const lightBoxFigcaption = lightBox.querySelector('.popup__lightBoxFigcaption')

// Функция открытия попапа
const popupToggle = () => {
    popup.classList.toggle('popup_opened')
}

// Функция закрытия контейнеров попапа
const popupClosePopupContainers = () => {
    // Закроем все контейнеры разом, что бы не возникали конфликты
    formAddElement.classList.remove('popup__form_opened')
    formEditProfile.classList.remove('popup__form_opened')
    lightBox.classList.remove('popup__lightBox_opened')

    // Обнулим значение формы добавления карточки, если что то вводили до этого
    formAddElementFirstInput.value = ''
    formAddElementSecondInput.value = ''
}
// Закрытие по крестику
popupCloseButton.addEventListener('click', () => {
    popupToggle()
    popupClosePopupContainers()
})

// Мне не нравится не то как я сейчас сделал, не создавать родителей с классом .popup__container, внутри которых будет
// содержимое - получается нужно будет много тогглов прописывать. Допускаю вероятность, что я протупил и не обнаружил
// логику тогглов, но тогда бы всеравно пришлось плодить функции тогглов.
// Зато одна костыльная функция - дешево и сердито, как ковровая бомбардировка.
// Скажите как правильно, я исправлю.
// Спасибо за ваши ревью и ответы! Снизу еще один коммент, на который вы не ответили в прошлый раз.

// Закрытие при клике по любому месту кроме popup__form
popup.addEventListener('click', (evt) => {
    if (evt.target !== evt.currentTarget) {
        return
    }
    popupToggle()
    popupClosePopupContainers()
})

// Открытие формы исправления профиля по кнопке
editButton.addEventListener('click', () => {

    // Вставляем значения
    formEditProfileFirstInput.value = nameOutput.textContent
    formEditProfileFirstInput.placeholder = nameOutput.textContent
    formEditProfileSecondInput.value = descriptionOutput.textContent
    formEditProfileSecondInput.placeholder = nameOutput.textContent

    // Открываем попап
    popupToggle()

    // Открываем форму
    formEditProfile.classList.add('popup__form_opened')
})


// Открытие формы добавления карточки по кнопке
addButton.addEventListener('click', () => {

    // Открываем попап
    popupToggle()

    // Открываем форму
    formAddElement.classList.add('popup__form_opened')
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
        //подскажите пожалуйста, как сделать через toggle замену картинки по src, я не разобрался.
        //потому что через задний фон - портится логика, имхо - это не правильно, должна меняться картинка, а не фон.
        // Как сделать правильно?
        // !
        // !
        // !
        //Вы не увидели этот коммент в прошлый раз
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

                // Открываем попап
                popupToggle()

                // Открываем лайтбокс
                lightBox.classList.add('popup__lightBox_opened')
            }
        })
    })

    //возвращаем сгенерированную карточку
    return elementClone
}

// Редактирование профиля по сабмиту
formEditProfile.addEventListener('submit',  (evt) => {
    evt.preventDefault()

    // Переносим значения из профиля
    nameOutput.textContent = formEditProfileFirstInput.value
    descriptionOutput.textContent = formEditProfileSecondInput.value

    // Закрываем попап
    popupToggle()

    // Закрываем форму
    formEditProfile.classList.remove('popup__form_opened')
})

// Создание карточки по сабмиту
formAddElement.addEventListener('submit',(evt) => {
    evt.preventDefault()

    // Объявляем имя и ссылку в константы
    const name = formAddElementFirstInput.value
    const link = formAddElementSecondInput.value

    // Вставляем полностью собранную карточку
    elements.prepend(generateElement(name, link))

    // Обнулим значения формы для следующего вызова
    formAddElementFirstInput.value = ''
    formAddElementSecondInput.value = ''

    // Закрываем попап
    popupToggle()

    // Закрываем форму
    formAddElement.classList.remove('popup__form_opened')
})

// Заполнение карточек из массива
initialCards.forEach ((el) => {

    //вставляем полностью собранную карточку
    elements.prepend(generateElement(el.name, el.link))
})