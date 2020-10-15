import {
  formValidationElements,
  data,
  elementsSelector,
  editProfileForm,
  editButton,
  addButton,
  addElementPopupSelector,
  addElementForm,
  lightBoxPopupSelector,
  editProfilePopupSelector,
  profileNameSelector,
  profileDescriptionSelector,
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

editButton.addEventListener("click", () => {
  const popupEditProfile = new PopupWithForm(editProfilePopupSelector, {
    handleFormSubmit: () => {
      new UserInfo({
        profileNameSelector,
        profileDescriptionSelector,
      }).setUserInfo();
    },
  });
  new UserInfo({
    profileNameSelector,
    profileDescriptionSelector,
  }).getUserInfo();
  popupEditProfile.open();
});

const handleCardClick = (name, link) => {
  const lightBox = new PopupWithImage(lightBoxPopupSelector, name, link);
  lightBox.open();
};

addButton.addEventListener("click", () => {
  const popupAddImage = new PopupWithForm(addElementPopupSelector, {
    handleFormSubmit: (cardInfo) => {
      const addCardNow = new Section(
        {
          items: cardInfo,
          renderer: (item) => {
            const newCard = new Card(
              item,
              "#element",
              handleCardClick
            ).generateCard();
            addCardNow.addItem(newCard);
          },
        },
        elementsSelector
      );
      addCardNow.render();
    },
  });

  popupAddImage.open();
});

const defaultCardList = new Section(
  {
    items: data,
    renderer: (item) => {
      const newCard = new Card(
        item,
        "#element",
        handleCardClick
      ).generateCard();

      defaultCardList.addItem(newCard);
    },
  },
  elementsSelector
);

defaultCardList.render();

new FormValidator(formValidationElements, editProfileForm).enableValidation();
new FormValidator(formValidationElements, addElementForm).enableValidation();
