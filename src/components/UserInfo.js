export class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._nameOnPage = document.querySelector(profileNameSelector);
    this._descriptionOnPage = document.querySelector(
      profileDescriptionSelector
    );
    this._nameInPopup = document
      .querySelector(".popup_editProfile")
      .querySelector(".popup__formInputText_firstInput");
    this._descriptionInPopup = document
      .querySelector(".popup_editProfile")
      .querySelector(".popup__formInputText_secondInput");
  }

  getUserInfo() {
    this._nameInPopup.value = this._nameOnPage.textContent;
    this._descriptionInPopup.value = this._descriptionOnPage.textContent;
  }

  setUserInfo() {
    this._nameOnPage.textContent = this._nameInPopup.value;
    this._descriptionOnPage.textContent = this._descriptionInPopup.value;
  }
}
