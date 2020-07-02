const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__openPopupButton')
const popupCloseButton = popup.querySelector('.popup__closeButton')
const formSubmitButton = popup.querySelector('.form__submitButton')


const formInputName = popup.querySelector('.form__inputText_typeName')
const formInputDescription = popup.querySelector('.form__inputText_typeDescription')
const outputName = document.querySelector('.profile__name')
const outputDescription = document.querySelector('.profile__description')

//Код для включения кнопки после проверки инпутов на будущее
formSubmitButton.removeAttribute('disabled');
formSubmitButton.classList.remove('form__submitButton_disabled')
formSubmitButton.classList.add('form__submitButton_enabled')
//Код для включения кнопки по проверке инпутов на будущее


let changeNameAndDescription = function() {
    outputName.innerHTML = formInputName.value
    outputDescription.innerHTML = formInputDescription.value
    popupClose()
}

formSubmitButton.addEventListener('click', changeNameAndDescription);

const popupOpen = function () {
    formInputName.value = outputName.innerHTML
    formInputDescription.value = outputDescription.innerHTML
    popup.classList.add('popup_opened')
    popup.classList.remove('popup_hidden')
}

const popupClose = function () {
    popup.classList.add('popup_hidden')
    popup.classList.remove('popup_opened')
}

const closePopupByClickingOverlay = function (event) {
    if (event.target !== event.currentTarget) { return }
    popupClose()
}

popup.addEventListener('click', closePopupByClickingOverlay)
popupOpenButton.addEventListener('click', popupOpen)
popupCloseButton.addEventListener('click', popupClose)

