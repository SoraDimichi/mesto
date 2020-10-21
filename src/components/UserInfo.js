export class UserInfo {
  constructor(profileNameSelector, profileAboutSelector, profileAvatarSelector) {
    this._nameOnPage = document.querySelector(profileNameSelector);
    this._aboutOnPage = document.querySelector(profileAboutSelector);
    this._avatarOnPage = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameOnPage.textContent,
      about: this._aboutOnPage.textContent,
    };
  }

  getUserId() {
    return this._userId;
  }

  _setUserId(data) {
    this._userId = data._id;
  }

  setUserInfo(data) {
    this._setUserId(data);
    this._nameOnPage.textContent = data.name;
    this._aboutOnPage.textContent = data.about;
    this.setUserAvatar(data);
  }

  setUserAvatar(data) {
    this._avatarOnPage.src = data.avatar;
  }
}
