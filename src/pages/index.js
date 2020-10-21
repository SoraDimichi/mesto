import './index.css';

import {
  formElements,
  elementsSelector,
  editUserForm,
  editUserButton,
  addButton,
  addElementPopupSelector,
  addElementForm,
  lightBoxPopupSelector,
  editUserPopupSelector,
  cardSelector,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  editAvatarButton,
  editAvatarPopupSelector,
  editAvatarForm,
  removeCardPopup,
} from '../utils/constants.js';

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';

import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupRemoveCard } from '../components/PopupRemoveCard.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: '9f008da4-23f8-43a7-a6e3-8665fc1f4b68',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    transceiverUserInfo.setUserInfo(userData);
    defaultSection.render(cardsData);
  })
  .catch((err) => console.log(err));

const transceiverUserInfo = new UserInfo(
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector
);

const popupEditProfile = new PopupWithForm(editUserPopupSelector, {
  sendInputValues: ({ firstInput, secondInput }) => {
    popupEditProfile.setLoading(true);
    api
      .patchUserInfo({
        name: firstInput,
        about: secondInput,
      })
      .then((result) => {
        transceiverUserInfo.setUserInfo(result);
        popupEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupEditProfile.setLoading(false);
      });
  },
});

editUserButton.addEventListener('click', () => {
  popupEditProfile.receiveInputValues(transceiverUserInfo.getUserInfo());
  popupEditProfile.open();
});

const popupEditAvatar = new PopupWithForm(editAvatarPopupSelector, {
  sendInputValues: ({ firstInput }) => {
    popupEditAvatar.setLoading(true);
    api
      .patchUserAvatar({
        avatar: firstInput,
      })
      .then((result) => {
        transceiverUserInfo.setUserAvatar(result);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.setLoading(false);
      });
  },
});

editAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open();
});

const defaultSection = new Section(
  {
    renderer: (cards) => {
      defaultSection.appendCard(newCard(cards));
    },
  },
  elementsSelector
);

const newCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: lightBox.open,
      handleDeleteClick: (item) => {
        PopupDeleteCard.open(item);
      },
      handleCardLike: (item, isLiked) => api.like(item, isLiked),
    },
    cardSelector,
    transceiverUserInfo.getUserId()
  );
  return card.generateCard();
};

const lightBox = new PopupWithImage(lightBoxPopupSelector);

const PopupDeleteCard = new PopupRemoveCard(removeCardPopup, {
  confirmRemoval: ({ id, deleteCard }) => {
    api
      .deleteCard(id)
      .then(() => {})
      .catch((err) => console.log(err));
    deleteCard();
    PopupDeleteCard.close();
  },
});

const popupAddImage = new PopupWithForm(addElementPopupSelector, {
  sendInputValues: ({ firstInput, secondInput }) => {
    popupAddImage.setLoading(true);
    api
      .postNewCard({ name: firstInput, link: secondInput })
      .then((result) => {
        defaultSection.prependCard(newCard(result));
        popupAddImage.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddImage.setLoading(false);
      });
  },
});

addButton.addEventListener('click', () => {
  popupAddImage.open();
});

new FormValidator(formElements, editAvatarForm).enableValidation();
new FormValidator(formElements, editUserForm).enableValidation();
new FormValidator(formElements, addElementForm).enableValidation();
