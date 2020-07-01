const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__openPopupButton')
const popupCloseButton = popup.querySelector('.popup__closeButton')

const popupOpen = function () {
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

