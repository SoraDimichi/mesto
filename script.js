//Найдем попап
const popup = document.querySelector('.popup')

//Функция открытия попапа
const popupOpen = () => {
    popup.classList.toggle('popup_opened')
}

//функция закрытия попапа
const popupClose = function () {
    popup.lastChild.remove()
    popup.classList.toggle('popup_opened')
}

// Найдем кнопку крестик
const popupCloseButton = popup.querySelector('.popup__closeButton')
//Закрытие по крестику
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

// Находим родитель куда будут вставляться карточки
const elements = document.querySelector('.elements')

// Находим темплейт карточки
const elementTemplate = document.querySelector('#element').content
const element = elementTemplate.querySelector('.element')

// Находим темплейт попапа
const popupTemplate = document.querySelector('#popupTemplate').content
// Находим лайтбокс внутри темплейта попапа
const lightBox = popupTemplate.querySelector('.popup__lightBox')

// Создавать попап просмотра для каждой карточки очень не рационально, следует использовать один универсальный попап
// и при его открытии изменять атрибуты (картинка, описание)

// Я совершенно не понял почему иррационально, если по факту все равно будет что то создаваться.
// Я сделал как вас понял - объединил лайтбокс и форму в один темплейт. (Мне это очень не нравится)
// Объясните подробно, что мне нужно сделать? Генерить из темплейта или генерить просто через апенды?
// Так то я мог и форму без темплейта сделать, тупо вставить её во внутрь попапа и менять значения внутри,
// и карточки в том числе - сделать пустую карточку и копировать её клоном,
// на сколько  я понял - темплейт используется для красоты кодстайла, а аппенды захламляют код (как нам рассказали
// в тренажере и намекали, что это самый лучший способ).
// Я очень сильно запутался, пожалуйста, разъясните!
// И просьба - я новичок в JS и вообще никогда код не писал, могли бы вы указать на ошибки кодстайла, спасибо.

const generateElement = (name, link) => {

    //Клонируем темплейт карточки
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
        LikeButtonImage.classList.toggle('element__likeButtonImage_toggled')
        //подскажите пожалуйста, как сделать через toggle замену картинки по src, я не разобрался.
        //потому что через задний фон - портится логика, имхо - это не правильно, если я сделал правильно.
    })

    //Функция удаления карточки
    elementRemoveButton.addEventListener('click', () => {
        elementClone.remove(elementClone)
    })

    //функция создания лайтбокса
    const elementLiteBoxListeners = elementClone.querySelectorAll('.element__image, .element__title')
    elementLiteBoxListeners.forEach ((listener) => {
        listener.addEventListener('click', (evt) => {
            if (evt.target !== elementRemoveButton) {
                // Клонируем  лайтбокс из темплейта
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
                popupOpen()
            }
        })
    })

    //возвращаем сгенерированную карточку
    return elementClone
}

// Находим форму внутри темплейта попапа
const form = popupTemplate.querySelector('.popup__form')

// Цепанем на константы аутпуты в профиле
const nameOutput = document.querySelector('.profile__name')
const descriptionOutput = document.querySelector('.profile__description')

const editButton = document.querySelector('.profile__openPopupButton') //Находим кнопку редактирования профиля

// Открытие формы исправления профиля по кнопке
editButton.addEventListener('click', () => {
    // Клонируем форму
    const formClone = form.cloneNode(true)

    // цепляем на каждый элемент формы константу
    const formTitle = formClone.querySelector('.popup__formTitle')
    const formFirstInput = formClone.querySelector('.popup__formInputText_typeFirstInput')
    const formSecondInput = formClone.querySelector('.popup__formInputText_typeSecondInput')
    const formSubmitButton = formClone.querySelector('.popup__formSubmitButton')

    // вставляем значения
    formTitle.textContent = 'Редактировать профиль'
    formFirstInput.value = nameOutput.textContent
    formSecondInput.value = descriptionOutput.textContent
    formSubmitButton.value = 'Отправить'

    // редактирование профиля по сабмиту
    formClone.addEventListener('submit', function (event) {
        event.preventDefault()
        nameOutput.textContent = formFirstInput.value
        descriptionOutput.textContent = formSecondInput.value
        popupClose()
    })

    //вставляем форму в попап
    popup.append(formClone)

    //Открываем попап
    popupOpen()
})

const addButton = document.querySelector('.profile__addButton') //Находим кнопку добавления карточки

//Открытие формы добавления карточки по кнопке
addButton.addEventListener('click', () => {

    // -------------------------------------------------------------------------------------------------- //

    const formClone = form.cloneNode(true) // Клонируем форму

    // цепляем на каждый элемент формы константу
    const formTitle = formClone.querySelector('.popup__formTitle')
    const formFirstInput = formClone.querySelector('.popup__formInputText_typeFirstInput')
    const formSecondInput = formClone.querySelector('.popup__formInputText_typeSecondInput')
    const formSubmitButton = formClone.querySelector('.popup__formSubmitButton')

    // Каким образом мне избавиться от задвоения кода в addButton и editButton? Через массив? Есть ли другой способ?

    // Заполняем значения
    formTitle.textContent = 'Новое место'
    formFirstInput.placeholder = 'Название'
    formFirstInput.title = 'Название'
    formSecondInput.placeholder = 'Ссылка на картинку'
    formSecondInput.title = 'Ссылка на картинку'
    formSubmitButton.value = 'Создать'

    // Создание карточки по сабмиту
    formClone.addEventListener('submit',(evt) => {
        evt.preventDefault()

        // Записываем в массив последнее значение (представляем, что это база данных за 300 и нам важно сохранять значения)
        initialCards.push({
            name: formFirstInput.value,
            link: formSecondInput.value
        })

        // Вставляем их в карточку
        const name = initialCards[initialCards.length - 1].name
        const link = initialCards[initialCards.length - 1].link

        //вставляем полностью собранную карточку
        elements.prepend(generateElement(name, link))

        //Закрываем попап
        popupClose()
    })

    //вставляем форму в попап
    popup.append(formClone)

    //Открываем попап
    popupOpen()
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
    elements.prepend(generateElement(el.name, el.link)) //вставляем полностью собранную карточку
})

