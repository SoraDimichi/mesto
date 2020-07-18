const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements')

initialCards.forEach ((el) => {
    const elementTemplate = document.querySelector('#element').content
    const element = elementTemplate.querySelector('.element')
    const elementClone = element.cloneNode(true)
    elementClone.querySelector('.element__title').textContent = el.name
    elementClone.querySelector('.element__image').alt = el.name
    elementClone.querySelector('.element__image').src = el.link
    elements.append(elementClone)
})


const popup = document.querySelector('.popup') //Найдем попап

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
        const formFirstInput = formClone.querySelector('.popup__formInputText_typeName')
        const formSecondInput = formClone.querySelector('.popup__formInputText_typeDescription')
        const formSubmitButton = formClone.querySelector('.popup__formSubmitButton')

        // Турбопроверка нажатой кнопки
        const eventTarget = evt.target; // цепляем эвэнт на константу
        // console.log(eventTarget) // узнаем на какую кнопку кликаем

        // Цепляем возможные кнопки на константы
        const editButton = document.querySelector('.profile__openPopupButton')
        const addButton = document.querySelector('.profile__addButton')

        // Проверяем какая кнопка нажата и в зависимости от этого генерим формы

        switch (eventTarget) {
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

                // и открываем попап


                break;
            case addButton: // кнопка добавления карточки
                            //Заполняем объявленные элементы
                formTitle.textContent = 'Новое место'
                formFirstInput.value = 'Название'
                formFirstInput.title = 'Название'
                formSecondInput.value = 'Ссылка на картинку'
                formSecondInput.title = 'Ссылка на картинку'
                formSubmitButton.value = 'Создать'

                formClone.addEventListener('submit',function (event) {
                    event.preventDefault()
                    if (confirm(`                Вы ввели:
                Название: ${formFirstInput.value}
                Ссылку: ${formSecondInput.value}
                Подтвердите правильность ввовда:`) === true) {
                        event.preventDefault()
                        initialCards.unshift({
                            name: formFirstInput.value,
                            link: formSecondInput.value
                        })
                        elements.innerHTML = ''
                        initialCards.forEach ((el) => {
                            const elementTemplate = document.querySelector('#element').content
                            const element = elementTemplate.querySelector('.element')
                            const elementClone = element.cloneNode(true)
                            elementClone.querySelector('.element__title').textContent = el.name
                            elementClone.querySelector('.element__image').alt = el.name
                            elementClone.querySelector('.element__image').src = el.link
                            elements.append(elementClone)
                        })
                        popupClose()
                        }
                })
                break;
        }

        popup.append(formClone)
        popup.classList.add('popup_opened')
        popup.classList.remove('popup_hidden')
    })
})