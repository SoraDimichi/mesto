const formValidationElements = {
    formSelector: '.popup__form',
    inputSelector: '.popup__formInputText',
    submitButtonSelector: '.popup__formSubmitButton',
    inactiveButtonClass: 'popup__formSubmitButton_disabled',
    inputErrorClass: 'popup__formInputText_error',
    errorClass: 'popup__formInputError'
}

const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid)

const toggleButton = (inputList, buttonElement, inactiveButtonClass) => {
    if (!hasInvalidInput(inputList)) {
        buttonElement.classList.remove(inactiveButtonClass)
        buttonElement.disabled = false
    } else {
        buttonElement.classList.add(inactiveButtonClass)
        buttonElement.disabled = true
    }
}

// Проверка на ошибки
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass)
    }
}

// Скрыть ошибку
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
    inputElement.classList.remove(inputErrorClass)
    errorElement.classList.remove(errorClass)
    errorElement.textContent = ''
}

// Показать ошибку
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
    inputElement.classList.add(inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(errorClass)
}


const enableValidation = (validationElements) => {
    const formArray = Array.from(document.querySelectorAll(validationElements.formSelector))
    formArray.forEach((formElement) => {
        setEventListeners(formElement, validationElements.inputErrorClass, validationElements.errorClass, validationElements.inputSelector,
            validationElements.submitButtonSelector, validationElements.inactiveButtonClass)
    })
}


const setEventListeners = (formElement, inputErrorClass, errorClass, inputSelector, submitButtonSelector, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector)
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
            toggleButton(inputList, buttonElement, inactiveButtonClass)
        })
    })
}

enableValidation(formValidationElements)

