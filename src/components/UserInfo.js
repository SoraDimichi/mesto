export class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this._nameOnPage = document.querySelector(profileNameSelector);
    this._descriptionOnPage = document.querySelector(
      profileDescriptionSelector
    );
  }

  returnUserInfo() {
    return [
      {
        firstInput: this._nameOnPage.textContent,
        secondInput: this._descriptionOnPage.textContent,
      },
    ];
  }

  setUserInfo(receivedUserInfo) {
    this._nameOnPage.textContent = receivedUserInfo[0].firstInput;
    this._descriptionOnPage.textContent = receivedUserInfo[0].secondInput;
  }
}
