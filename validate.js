const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__formInputText',
    submitButtonSelector: '.popup__formSubmitButton',
    inactiveButtonClass: '.popup__formSubmitButton_disabled',
    inputErrorClass: 'popup__formInputText_error',
    errorClass: 'popup__formError'
}

enableValidation(obj)

// const toggleButtonState = (input, buttonElement) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add('popup__formSubmitButton_disabled')
//         buttonElement.setAttribute("disabled", "")
//     } else {
//         buttonElement.classList.remove('popup__formSubmitButton_disabled')
//         buttonElement.removeAttribute("disabled", "")
//     }
// }

function enableValidation({ formSelector, inputSelector, inputErrorClass, errorClass}) {
    const forms = Array.from(document.querySelectorAll(formSelector))
    forms.forEach (form => {
        form.addEventListener('submit', evt => evt.preventDefault())
        const inputs = form.querySelectorAll(inputSelector)
        inputs.forEach(input => {
            input.addEventListener('input', _ => {
                if (!input.validity.valid) {
                    const errorPlace = form.querySelector(`#${input.id}Error`)
                    input.classList.add(inputErrorClass)
                    errorPlace.classList.add(errorClass)
                    errorPlace.textContent = input.validationMessage
                } else {
                    const errorPlace = form.querySelector(`#${input.id}Error`)
                    input.classList.remove(inputErrorClass)
                    errorPlace.classList.remove(errorClass)
                    errorPlace.textContent = ''
                }
            console.log(!input.validity.valid)
            })
        })
        // const hasInvalidInput = (inputs) => {
        //     return inputs.some((input) => {
        //         return !input.validity.valid
        //     })
        // }
        // console.log(hasInvalidInput(inputs))
    })
}
        // return inputs.some(hasInvalidInput) => {
        //
        // })
        // const button = form.querySelector(submitButtonSelector)
        // if () {
        //     button.classList.add(inactiveButtonClass)
        //     button.setAttribute("disabled", "")
        // } else {
        //     button.classList.remove(inactiveButtonClass)
        //     button.removeAttribute("disabled")
        // }


// Версия кода из тренажера
//
// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
//     inputElement.classList.add('popup__formInputText')
//     errorElement.textContent = errorMessage
//     errorElement.classList.add('popup__formInputError')
// }
//
// const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
//     inputElement.classList.remove('popup__formInputText_error')
//     errorElement.classList.remove('popup__formInputError')
//     errorElement.textContent = ''
// }
//
// const checkInputValidity = (formElement, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage)
//     } else {
//         hideInputError(formElement, inputElement)
//     }
// }
//
// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__formInputText'))
//     const buttonElement = formElement.querySelector('.popup__formSubmitButton')
//
//     // чтобы проверить состояние кнопки в самом начале
//     toggleButtonState(inputList, buttonElement)
//
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//             checkInputValidity(formElement, inputElement)
//             // чтобы проверять его при изменении любого из полей
//             toggleButtonState(inputList, buttonElement)
//         })
//     })
// }
//
// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid
//     })
// }
//
// const enableValidation = () => {
//     const formList = Array.from(document.querySelectorAll('.popup__form'))
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', function (evt) {
//             evt.preventDefault()
//         });
//
//         const fieldsetList = Array.from(formElement.querySelectorAll('.popup__formFieldSet'))
//
//         fieldsetList.forEach((fieldSet) => {
//             setEventListeners(fieldSet)
//         })
//     })
// }
//
// enableValidation()
