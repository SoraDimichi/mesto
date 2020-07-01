const popupForm = document.querySelector('.form')
const popupFormOpenButton = document.querySelector('.profile__edit-button')
const popupFormCloseButton = popupForm.querySelector('.form__close-button')

const popupFormToggle = function (event) {
    event.stopPropagation()
    popupForm.classList.toggle('form_opened')
}

const closePopupByClickingOverlay = function (event) {
    if (event.target !== event.currentTarget) { return }
    popupFormToggle()
}

popupForm.addEventListener('click', closePopupByClickingOverlay)
popupFormOpenButton.addEventListener('click', popupFormToggle)
popupFormCloseButton.addEventListener('click', popupFormToggle)

