const popup = document.querySelector('.popup') //Найдем попап
const form = popup.querySelector('.popup__form') //Найдем форму в попап

const formInputName = form.querySelector('.popup__formInputText_typeName') //Найдем инпут имени в форме
const formInputDescription = form.querySelector('.popup__formInputText_typeDescription') //Найдем инпут описания в форме

const outputName = document.querySelector('.profile__name') //Найдем аутпут имени
const outputDescription = document.querySelector('.profile__description') //Найдем аутпут описания

//Открытие по кнопке с карандашом и запись имени и описания в поле инпутов

const popupOpenButton = document.querySelector('.profile__openPopupButton') // Найдем кнопку с карандашом

const popupOpen = function () {
    formInputName.value = outputName.textContent
    formInputDescription.value = outputDescription.textContent
    popup.classList.add('popup_opened')
    popup.classList.remove('popup_hidden')
}

popupOpenButton.addEventListener('click', popupOpen)

//Закрытие по крестику

const popupCloseButton = popup.querySelector('.popup__closeButton') // Найдем кнопку крестик

const popupClose = function () {
    popup.classList.add('popup_hidden')
    popup.classList.remove('popup_opened')
}

popupCloseButton.addEventListener('click', popupClose) //Повесим функцию на крестик

//Закрытие при клике по любому месту кроме popup__form

const closePopupByClickingOverlay = function (event) {
    if (event.target !== event.currentTarget) { return }
    popupClose()
}

popup.addEventListener('click', closePopupByClickingOverlay) //Повесим функцию на пространство вне формы

//Отправка формы (проверка инпутов не доделана)

function ChangeNameAndDescription (evt) {
    evt.preventDefault()
    if (confirm(`    Вы ввели:
    
    Имя: ${formInputName.value}
    Описание: ${formInputDescription.value}
    
    Подтвердите правильность ввовда:`) === true) {
    evt.preventDefault()
    outputName.textContent = formInputName.value
    outputDescription.textContent = formInputDescription.value
        popupClose()
    } else {
        evt.preventDefault()
    }
    }

form.addEventListener('submit', ChangeNameAndDescription)





// //Проверка форм на количество символов
//
// const formSubmitButton = form.querySelector('.popup__formSubmitButton') //Найдем кнопку в форме
//
// function LengthCheck() {
//     if ((formInputName.value.length !== 0 && formInputDescription.value.length !== 0) === false) {
//         formSubmitButton.setAttribute('disabled', true)
//         formSubmitButton.classList.add('popup__formSubmitButton_disabled')
//         formSubmitButton.classList.remove('popup__FormSubmitButton_enabled')
//     } else if (((formInputName.value.length !== 0 && formInputDescription.value.length !== 0) === false) {
//         formSubmitButton.removeAttribute(disabled)
//         formSubmitButton.classList.add('popup__formSubmitButton_enabled')
//         formSubmitButton.classList.remove('popup__FormSubmitButton_disabled')
//     }
// }
//     form.addEventListener('keyup', LengthCheck)
