export class UserInfo {
  constructor(profileNameSelector, profileAboutSelector) {
    this._nameOnPage = document.querySelector(profileNameSelector)
    this._aboutOnPage = document.querySelector(profileAboutSelector)
  }

  getUserInfo() {
    return {
      name: this._nameOnPage.textContent,
      about: this._aboutOnPage.textContent,
    }
  }

  setUserInfo({ name, about }) {
    this._nameOnPage.textContent = name
    this._aboutOnPage.textContent = about
  }
}
