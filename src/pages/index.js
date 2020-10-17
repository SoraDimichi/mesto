import "./index.css";

import {
  formElements,
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

const transceiverUserInfo = new UserInfo(
  profileNameSelector,
  profileDescriptionSelector
);

const popupEditProfile = new PopupWithForm(editProfilePopupSelector, {
  sendInputValues: (values) => {
    transceiverUserInfo.setUserInfo(values);
  },
});

editButton.addEventListener("click", () => {
  popupEditProfile.receiveInputValues(transceiverUserInfo.getUserInfo());
  popupEditProfile.open();
});

const lightBox = new PopupWithImage(lightBoxPopupSelector);

const newCard = (item) => {
  return new Card(item, "#element", {
    sendCardInfo: (item) => {
      lightBox.open(item);
    },
  });
};

const popupAddImage = new PopupWithForm(addElementPopupSelector, {
  sendInputValues: ({ firstInput, secondInput }) => {
    const name = firstInput;
    const link = secondInput;
    defaultSection.addItem(newCard({ name, link }).generateCard());
  },
});

addButton.addEventListener("click", () => {
  popupAddImage.open();
});

const defaultSection = new Section(
  {
    items: data,
    renderer: ({ name, link }) =>
      defaultSection.addItem(newCard({ name, link }).generateCard()),
  },
  elementsSelector
);

defaultSection.render();

new FormValidator(formElements, editProfileForm).enableValidation();
new FormValidator(formElements, addElementForm).enableValidation();
