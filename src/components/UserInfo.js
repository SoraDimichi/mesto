export class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this._nameOnPage = document.querySelector(profileNameSelector);
    this._descriptionOnPage = document.querySelector(
      profileDescriptionSelector
    );
  }

  getUserInfo() {
    return {
      name: this._nameOnPage.textContent,
      description: this._descriptionOnPage.textContent,
    };
  }

  setUserInfo({ firstInput, secondInput }) {
    this._nameOnPage.textContent = firstInput;
    this._descriptionOnPage.textContent = secondInput;
  }
}
