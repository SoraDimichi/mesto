export class FormValidator {
    constructor(validationElements, formElement) {
        this._inputSelector = validationElements.inputSelector
        this._submitButtonSelector = validationElements.submitButtonSelector
        this._inactiveButtonClass = validationElements.inactiveButtonClass
        this._inputErrorClass = validationElements.inputErrorClass
        this._errorClass = validationElements.errorClass
        this._formElement = formElement
    }

    _checkInputValidity (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}Error`)
        if (!inputElement.validity.valid) {
            inputElement.classList.add(this._inputErrorClass)
            errorElement.textContent = inputElement.validationMessage
            errorElement.classList.add(this._errorClass)
        } else {
            inputElement.classList.remove(this._inputErrorClass)
            errorElement.classList.remove(this._errorClass)
            errorElement.textContent = ''
        }
    }

    _toggleButton (inputList, buttonElement) {
        const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid)
        if (!hasInvalidInput(inputList)) {
            buttonElement.classList.remove(this._inactiveButtonClass)
            buttonElement.disabled = false
        } else {
            buttonElement.classList.add(this._inactiveButtonClass)
            buttonElement.disabled = true
        }
    }

    _setEventListeners () {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity (inputElement)
                this._toggleButton (inputList, buttonElement)
            })
        })
    }

    enableValidation () {
        this._setEventListeners()
    }
}


// const toggleButton = (inputList, buttonElement, inactiveButtonClass) => {
//     const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid)
//     if (!hasInvalidInput(inputList)) {
//         buttonElement.classList.remove(inactiveButtonClass)
//         buttonElement.disabled = false
//     } else {
//         buttonElement.classList.add(inactiveButtonClass)
//         buttonElement.disabled = true
//     }
// }
//
// // Проверка на ошибки
// const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
//     } else {
//         hideInputError(formElement, inputElement, inputErrorClass, errorClass)
//     }
// }
//
// // Скрыть ошибку
// const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
//     inputElement.classList.remove(inputErrorClass)
//     errorElement.classList.remove(errorClass)
//     errorElement.textContent = ''
// }
//
// // Показать ошибку
// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
//     inputElement.classList.add(inputErrorClass)
//     errorElement.textContent = errorMessage
//     errorElement.classList.add(errorClass)
// }
//
//
// const setEventListeners = (formElement, inputErrorClass, errorClass, inputSelector, submitButtonSelector, inactiveButtonClass) => {
//     const inputList = Array.from(formElement.querySelectorAll(inputSelector))
//     const buttonElement = formElement.querySelector(submitButtonSelector)
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
//             toggleButton(inputList, buttonElement, inactiveButtonClass)
//         })
//     })
// }
//
//
// const enableValidation = (validationElements) => {
//     const formArray = Array.from(document.querySelectorAll(validationElements.formSelector))
//     formArray.forEach((formElement) => {
//         setEventListeners(formElement, validationElements.inputErrorClass, validationElements.errorClass, validationElements.inputSelector,
//             validationElements.submitButtonSelector, validationElements.inactiveButtonClass)
//     })
// }
//
// enableValidation(formValidationElements)

