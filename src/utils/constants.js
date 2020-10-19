export const formElements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__formInputText',
  submitButtonSelector: '.popup__formSubmitButton',
  inactiveButtonClass: 'popup__formSubmitButton_disabled',
  inputErrorClass: 'popup__formInputText_error',
  errorClass: 'popup__formInputError',
}

export const profileNameSelector = '.profile__name'
export const profileAboutSelector = '.profile__about'
export const profileAvatarSelector = '.profile__avatar'

export const editAvatarButton = document.querySelector('.profile__avatar')
export const editAvatarPopupSelector = '.popup_editAvatar'
export const editAvatarForm = document
  .querySelector(editAvatarPopupSelector)
  .querySelector(formElements.formSelector)

export const editUserButton = document.querySelector('.profile__openPopupButton')
export const editUserPopupSelector = '.popup_editUser'
export const editUserForm = document
  .querySelector(editUserPopupSelector)
  .querySelector(formElements.formSelector)

export const addButton = document.querySelector('.profile__addButton')
export const addElementPopupSelector = '.popup_addElement'
export const addElementForm = document
  .querySelector(addElementPopupSelector)
  .querySelector(formElements.formSelector)

export const lightBoxPopupSelector = '.popup_lightBox'

export const elementsSelector = '.elements'

export const escapeCode = 27
// Массив карточек по умолчанию
export const data = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
]
