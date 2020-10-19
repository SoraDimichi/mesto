// import './index.css'

import {
  formElements,
  data,
  elementsSelector,
  editUserForm,
  editUserButton,
  addButton,
  addElementPopupSelector,
  addElementForm,
  lightBoxPopupSelector,
  editUserPopupSelector,
  profileNameSelector,
  profileAboutSelector,
  // profileAvatarSelector,
  // editAvatarButton,
  // editAvatarPopupSelector,
  editAvatarForm,
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'

import { Section } from '../components/Section.js'
import { UserInfo } from '../components/UserInfo.js'
// import { AvatarInfo } from '../components/AvatarInfo.js'

// const transceiverAvatarInfo = new AvatarInfo(profileAvatarSelector)
//
// const popupEditAvatar = new PopupWithForm(editAvatarPopupSelector, {
//   sendInputValues: ({ firstInput }) => {
//     const avatar = firstInput
//     transceiverAvatarInfo.setAvatarInfo({ avatar })
//   },
// })

// editAvatarButton.addEventListener('click', () => {
//   popupEditAvatar.open()
// })

const transceiverUserInfo = new UserInfo(profileNameSelector, profileAboutSelector)
const popupEditProfile = new PopupWithForm(editUserPopupSelector, {
  sendInputValues: ({ firstInput, secondInput }) => {
    const name = firstInput
    const about = secondInput
    transceiverUserInfo.setUserInfo({ name, about })
  },
})

editUserButton.addEventListener('click', () => {
  popupEditProfile.receiveInputValues(transceiverUserInfo.getUserInfo())
  popupEditProfile.open()
})

const lightBox = new PopupWithImage(lightBoxPopupSelector)

const newCard = (item) => {
  return new Card(item, '#element', {
    sendCardInfo: (item) => {
      lightBox.open(item)
    },
  })
}

const popupAddImage = new PopupWithForm(addElementPopupSelector, {
  sendInputValues: ({ firstInput, secondInput }) => {
    const name = firstInput
    const link = secondInput
    defaultSection.addItem(newCard({ name, link }).generateCard())
  },
})

addButton.addEventListener('click', () => {
  popupAddImage.open()
})

const defaultSection = new Section(
  {
    items: data,
    renderer: ({ name, link }) => defaultSection.addItem(newCard({ name, link }).generateCard()),
  },
  elementsSelector
)

defaultSection.render()

new FormValidator(formElements, editAvatarForm).enableValidation()
new FormValidator(formElements, editUserForm).enableValidation()
new FormValidator(formElements, addElementForm).enableValidation()
