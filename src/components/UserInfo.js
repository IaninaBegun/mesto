export default class UserInfo {
  constructor({nameOfUser, bioOfUser, avatarOfUser}) {
    this._userName = nameOfUser;
    this._userBio = bioOfUser;
    this._userAvatar = avatarOfUser;
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

  setUserAvatar(userPicture) {
    this._userAvatar.src = userPicture;
  }
}
