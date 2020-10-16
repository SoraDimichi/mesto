export const formValidationElements = {
  formSelector: ".popup__form",
  inputSelector: ".popup__formInputText",
  submitButtonSelector: ".popup__formSubmitButton",
  inactiveButtonClass: "popup__formSubmitButton_disabled",
  inputErrorClass: "popup__formInputText_error",
  errorClass: "popup__formInputError",
};

export const profileNameSelector = ".profile__name";
export const profileDescriptionSelector = ".profile__description";

export const editButton = document.querySelector(".profile__openPopupButton");
export const editProfilePopupSelector = ".popup_editProfile";
export const editProfileForm = document
  .querySelector(".popup_editProfile")
  .querySelector(formValidationElements.formSelector);

export const addButton = document.querySelector(".profile__addButton");
export const addElementPopupSelector = ".popup_addElement";
export const addElementForm = document
  .querySelector(addElementPopupSelector)
  .querySelector(formValidationElements.formSelector);

export const lightBoxPopupSelector = ".popup_lightBox";

export const elementsSelector = ".elements";

// Массив карточек по умолчанию
export const data = [
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
];
