export default class UserInfo {
  constructor({nameOfUser, bioOfUser}) {
    this._userName = nameOfUser;
    this._userBio = bioOfUser;
  }

  getUserInfo() {
    const dataOfUser = {}
    dataOfUser.name = this._userName.textContent;
    dataOfUser.bio = this._userBio.textContent;
    return dataOfUser;
  }

  setUserInfo(inputName, inputBio) {
    this._userName.textContent = inputName;
    this._userBio.textContent = inputBio;
  }
}
