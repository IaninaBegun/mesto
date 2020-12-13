export default class Card {
  constructor(data, cardSelector, {handleCardClick, handleDeleteIconClick, handleLikesClick}) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleDeleteIconClick = handleDeleteIconClick;
    this.handleLikesClick = handleLikesClick;
  }

  _getTemplate() {
    const сardElement = this._cardSelector
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
    return сardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elementImage = this._element.querySelector('.elements__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this.checkCardIsLiked(this._likes);
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.elements__btn-like').addEventListener('click', (evt) => {
      this._handleCardLikes();
      this.handleLikesClick(evt.target);
    });

    this._element.querySelector('.elements__btn-erase').addEventListener('click', () => {
      this.handleDeleteIconClick(this._id);
    });

    this._element.querySelector('.elements__image').addEventListener('click', () => {
        this.handleCardClick(this._name, this._link);
    });
  }

  _handleCardLikes() {
    this._element.querySelector('.elements__btn-like').classList.toggle('elements__btn-like_active');
  }

  handleCardDelete() {
    this._element.remove();
    this._element = null;
  }

  checkCardIsLiked(arr) {
    const cardsCounterLikes = this._element.querySelector('.elements__likes-counter');
    cardsCounterLikes.textContent = arr.length;
  }

  checkIfOwner (idOfUser) {
    if (this._owner._id === idOfUser) {
      this._element.querySelector('.elements__btn-erase')
        .classList.remove('elements__btn-erase_invisible');
    }
  }
}

