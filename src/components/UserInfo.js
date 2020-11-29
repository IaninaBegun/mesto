export default class UserInfo {
  constructor({nameOfUser, bioOfUser}) {
    this._userName = nameOfUser;
    this._userBio = bioOfUser;
  }

  getUserInfo(data) {
    data.name.value = this._userName.textContent;
    data.bio.value = this._userBio.textContent;
  }

  setUserInfo(inputName, inputBio) {
    this._userName.textContent = inputName;
    this._userBio.textContent = inputBio;
  }
}
