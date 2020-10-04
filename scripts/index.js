import { formValidationElements, data } from "./data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// Находим родитель куда будут вставляться карточки
const elements = document.querySelector(".elements");

// Цепанем на константы аутпуты в профиле
const nameOutput = document.querySelector(".profile__name");
const descriptionOutput = document.querySelector(".profile__description");

// Находим кнопку редактирования профиля
const editButton = document.querySelector(".profile__openPopupButton");

// Находим попап редактирования профиля
const editProfilePopup = document.querySelector(".popup_editProfile");

// Находим форму редактирования профиля внутри попапа
const editProfileForm = editProfilePopup.querySelector(
  formValidationElements.formSelector
);

// Найдем поля ввода
const editProfileFormFirstInput = editProfileForm.querySelector(
  ".popup__formInputText_firstInput"
);
const editProfileFormSecondInput = editProfileForm.querySelector(
  ".popup__formInputText_secondInput"
);

// Находим кнопку добавления карточки
const addButton = document.querySelector(".profile__addButton");
// Находим попап добавления карточки
const addElementPopup = document.querySelector(".popup_addElement");

// Находим форму редактирования профиля внутри попапа
const addElementForm = addElementPopup.querySelector(
  formValidationElements.formSelector
);

// Найдем поля ввода
const addElementFormFirstInput = addElementForm.querySelector(
  ".popup__formInputText_firstInput"
);
const addElementFormSecondInput = addElementForm.querySelector(
  ".popup__formInputText_secondInput"
);

// Находим лайтбокс внутри попапа
const lightBoxPopup = document.querySelector(".popup_lightBox");

// Объявляем все используемые элементы лайтбокса
const lightBoxImage = lightBoxPopup.querySelector(".popup__lightBoxImage");
const lightBoxFigcaption = lightBoxPopup.querySelector(
  ".popup__lightBoxFigcaption"
);

// Находим все попапы и запишем их в массив
const popupsList = Array.from(document.querySelectorAll(".popup"));

//Функция проверки открыт ли попап и добавления слушателя события кнопки esc
const keyHandler = (evt) => {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    console.log("Hello");
    popupClose(openedPopup);
  }
};

const popupOpen = (popup) => {
  document.addEventListener("keydown", keyHandler);
  popup.classList.add("popup_opened");
};

const popupClose = (popup) => {
  document.removeEventListener("keydown", keyHandler);
  popup.classList.remove("popup_opened");
};

// Функция очистки полей, ошибок и блокировщик кнопки

const popupCleaner = (
  popup,
  {
    inputSelector,
    errorClass,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
  }
) => {
  const formInputs = popup.querySelectorAll(inputSelector);
  const formInputErrors = popup.querySelectorAll(`.${errorClass}`);
  const formButton = popup.querySelector(submitButtonSelector);

  if (!formButton.classList.contains(inactiveButtonClass)) {
    formButton.classList.add(inactiveButtonClass);
    formButton.disabled = true;
  }

  formInputs.forEach((input) => {
    input.classList.remove(inputErrorClass);
    input.value = "";
  });

  formInputErrors.forEach((formInputError) => {
    formInputError.classList = "";
    formInputError.textContent = "";
  });
};

// Функция закрытия попапа по крестику или полю за формой
popupsList.forEach((popup) => {
  // Найдем крестик в попапе
  const popupCloseButton = popup.querySelector(".popup__closeButton");
  // Добавим слушатель на попап
  popup.addEventListener("click", (evt) => {
    if (evt.target !== evt.currentTarget && evt.target !== popupCloseButton) {
      return;
    }
    popupClose(popup);
  });
});

// Открытие формы исправления профиля по кнопке
editButton.addEventListener("click", () => {
  // Очистим попап
  popupCleaner(editProfilePopup, formValidationElements);

  // Вставляем значения
  editProfileFormFirstInput.value = nameOutput.textContent;
  editProfileFormSecondInput.value = descriptionOutput.textContent;

  // Открываем попап
  popupOpen(editProfilePopup);
});

// Открытие формы добавления карточки по кнопке
addButton.addEventListener("click", () => {
  // Очистим попап
  popupCleaner(addElementPopup, formValidationElements);

  // Открываем попап
  popupOpen(addElementPopup);
});

// Редактирование профиля по сабмиту
editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Переносим значения из профиля
  nameOutput.textContent = editProfileFormFirstInput.value;
  descriptionOutput.textContent = editProfileFormSecondInput.value;

  // Закрываем попап
  popupClose(editProfilePopup);
});

// Создание карточки по сабмиту
addElementForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Объявляем имя и ссылку в константы
  const newAddedCard = {
    link: addElementFormSecondInput.value,
    name: addElementFormFirstInput.value,
  };

  // Вставляем полностью собранную карточку
  addElementToStart(newAddedCard);

  // Закрываем попап
  popupClose(addElementPopup);
});

const setLightBoxPopupOpener = (name, link) => {
  // Накидываем значения на аргументы функции
  lightBoxFigcaption.textContent = name;
  lightBoxImage.alt = name;
  lightBoxImage.src = link;
  // Открываем попап лайтбокса
  popupOpen(lightBoxPopup);
};

//функция добавления сгенерированной карточки в начало родителя
const addElementToStart = (card) => {
  const newCard = new Card(
    card,
    "#element",
    setLightBoxPopupOpener
  ).generateCard();
  // setLightBoxPopupOpener(newCard);
  //вставляем полностью собранную карточку
  elements.prepend(newCard);
};

data.forEach((card) => {
  addElementToStart(card);
});

new FormValidator(formValidationElements, editProfileForm).enableValidation();
new FormValidator(formValidationElements, addElementForm).enableValidation();
