const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
    inputElement.classList.add('popup__formInputText')
    errorElement.textContent = errorMessage
    errorElement.classList.add('popup__formInputError')
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
    inputElement.classList.remove('popup__formInputText_error')
    errorElement.classList.remove('popup__formInputError')
    errorElement.textContent = ''
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__formInputText'))
    const buttonElement = formElement.querySelector('.popup__formSubmitButton')

    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement)
            // чтобы проверять его при изменении любого из полей
            toggleButtonState(inputList, buttonElement)
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__formSubmitButton_disabled')
        buttonElement.setAttribute("disabled", "")
    } else {
        buttonElement.classList.remove('popup__formSubmitButton_disabled')
        buttonElement.removeAttribute("disabled", "")
    }
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault()
        });

        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__formFieldSet'))

        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet)
        })
    })
}

enableValidation()
