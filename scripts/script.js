const script = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__openPopupButton')
const popupCloseButton = script.querySelector('.popup__closeButton')
const formSubmitButton = script.querySelector('.form__submitButton')


const formInputName = script.querySelector('.form__inputText_typeName')
const formInputDescription = script.querySelector('.form__inputText_typeDescription')
const outputName = document.querySelector('.profile__name')
const outputDescription = document.querySelector('.profile__description')

//Код для включения кнопки после проверки инпутов на будущее
formSubmitButton.removeAttribute('disabled');
formSubmitButton.classList.remove('form__submitButton_disabled')
formSubmitButton.classList.add('form__submitButton_enabled')
//Код для включения кнопки по проверке инпутов на будущее


// Могли бы вы помочь, пожалуйста
// https://imgur.com/a/p4oE1xb
// В тренажере был предоставлен метод вызова value (ссылка), я проковырялся так и не понял почему у меня он не работает,
// хотел сделать проверку на длинну в инпутах через formInputDescription.value.length и
// ${formInputDescription.value.length} для включения кнопки - не работает,
// так же пытался для всех остальных задач использовать. Помогите, пожалуйста, расскажите как пользоваться :c


let changeNameAndDescription = function() {
    outputName.innerHTML = formInputName.value
    outputDescription.innerHTML = formInputDescription.value
    popupClose()
}

formSubmitButton.addEventListener('click', changeNameAndDescription);

const popupOpen = function () {
    formInputName.value = outputName.innerHTML
    formInputDescription.value = outputDescription.innerHTML
    script.classList.add('popup_opened')
    script.classList.remove('popup_hidden')
}

const popupClose = function () {
    script.classList.add('popup_hidden')
    script.classList.remove('popup_opened')
}

const closePopupByClickingOverlay = function (event) {
    if (event.target !== event.currentTarget) { return }
    popupClose()
}

script.addEventListener('click', closePopupByClickingOverlay)
popupOpenButton.addEventListener('click', popupOpen)
popupCloseButton.addEventListener('click', popupClose)