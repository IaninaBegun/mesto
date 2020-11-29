export default class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
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
    this._element.querySelector('.elements__title').textContent = this._name;
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.elements__btn-like').addEventListener('click', () => {
      this._handleCardLikes();
    });

    this._element.querySelector('.elements__btn-erase').addEventListener('click', () => {
      this._handleCardDelete();
    });

    this._element.querySelector('.elements__image').addEventListener('click', (evt) => {
        const cardImage = evt.target.src;
        const cardTitle = this._element.querySelector('.elements__title').innerText;
        this.handleCardClick(cardTitle, cardImage);

    });
  }

  _handleCardLikes() {
    this._element.querySelector('.elements__btn-like').classList.toggle('elements__btn-like_active');
  }

  _handleCardDelete() {
    this._element.remove();
  }
}
