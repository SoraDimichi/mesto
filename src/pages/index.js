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
  escapeCode,
} from "../utils/constants.js";

import "./index.css";

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

const popupEditProfile = new PopupWithForm(
  editProfilePopupSelector,
  escapeCode,
  {
    sendInputValues: (values) => {
      transceiverUserInfo.setUserInfo(values);
    },
  }
);

const lightBox = new PopupWithImage(lightBoxPopupSelector, escapeCode);
const popupAddImage = new PopupWithForm(addElementPopupSelector, escapeCode, {
  sendInputValues: (cardInfo) => {
    const addSectionNow = new Section(
      {
        items: cardInfo,
        renderer: (item) => {
          const newCard = new Card(item, "#element", {
            sendCardInfo: (cardInfo) => {
              lightBox.open(cardInfo);
            },
          }).generateCard();
          defaultSectionList.addItem(newCard);
        },
      },
      elementsSelector
    );
    addSectionNow.render();
  },
});

const defaultSectionList = new Section(
  {
    items: data,
    renderer: (item) => {
      const newCard = new Card(item, "#element", {
        sendCardInfo: (cardInfo) => {
          lightBox.open(cardInfo);
        },
      }).generateCard();
      defaultSectionList.addItem(newCard);
    },
  },
  elementsSelector
);

editButton.addEventListener("click", () => {
  popupEditProfile.receiveInputValues(transceiverUserInfo.returnUserInfo());
  popupEditProfile.open();
});

addButton.addEventListener("click", () => {
  popupAddImage.open();
});

defaultSectionList.render();

new FormValidator(formElements, editProfileForm).enableValidation();
new FormValidator(formElements, addElementForm).enableValidation();
