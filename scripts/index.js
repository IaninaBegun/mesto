const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__btn_edit');
const closeProfileButton = document.getElementById('editProfileCloseBtn');
const popUp = document.querySelector('.popup');
const addButton = document.querySelector('.profile__btn_add');
const saveButton = document.querySelector('.input__btn');
const closeCardFormButton = document.getElementById('addCardsCloseBtn');
const formElement = document.querySelector('.input');
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_bio');
const profileTitle = document.getElementById('profile-title');
const profileSubtitle = document.getElementById('profile-subtitle');
const cardTemplate = document.querySelector('.card-template');
const cardsList = document.querySelector('.elements__list');
const cardNameInput = document.getElementById('placeNameInput');
const cardUrlInput = document.getElementById('placeSourceInput');
const cardsAddPopup = document.querySelector('.popup_addCards');
const editProfile = document.querySelector('.popup_editProfile');
const cardAddForm = document.querySelector('.input_cards');
const cardSaveButton = document.querySelector('.input__btn_cards');
const enlargeImage = document.querySelector('.popup_enlargeImage');

const createCards = (data) => {
  const card = cardTemplate.content.cloneNode(true);
  const cardText = card.querySelector('.elements__title');
  const cardImage = card.querySelector('.elements__image');
  cardText.innerText = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const likesButton = card.querySelector('.elements__btn-like');
  const deleteButton = card.querySelector('.elements__btn-erase');

  deleteButton.addEventListener('click', handlerDelete);
  likesButton.addEventListener('click', handlerLikes);

  cardImage.addEventListener('click', () => togglePopup(enlargeImage), handlerEnlargeImage);

  return card;
};

const handlerEnlargeImage = (evt) => {
  evt.target.largeImagePopup();
};

function largeImagePopup() {
  const popupImage = enlargeImage.querySelector('.popup__image');
  const popupImageTitle = enlargeImage.querySelector('.popup__title');
  popupImage.src = cardImage.src;
  popupImageTitle.innerText = cardText.innerText;
}

const renderList = () => {
  const items = initialCards.map(element => createCards(element));
  cardsList.append(...items)
};

const handlerDelete = (evt) => {
  evt.target.closest('.elements__element').remove();
};

const handlerLikes = (evt) => {
  evt.target.closest('.elements__btn-like').classList.toggle('elements__btn-like_active');
};

const bindHandlers = () => {
  addButton.addEventListener('click', () => togglePopup(cardsAddPopup));
  closeCardFormButton.addEventListener('click', () => togglePopup(cardsAddPopup));
};

function togglePopup(popUp) {
  popUp.classList.toggle('popup_opened');
}

function insertUserData() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function formSubmitHandler (evt) {
	evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup(editProfile);
}

function addCards() {
  function newCard(item, item2) {
    createCards({
      name: cardNameInput.value,
      link: cardUrlInput.value
    });

  cardsList.prepend(item, item2);

  cardNameInput.value = '';
  cardUrlInput.value = '';
  }
  newCard();
}

/**/

function cardsSubmitHandler (evt) {
  evt.preventDefault();
  addCards();
  togglePopup(cardsAddPopup);
}

renderList();
bindHandlers();

editButton.addEventListener('click', () => togglePopup(editProfile), insertUserData());
closeProfileButton.addEventListener('click', () => togglePopup(editProfile));
formElement.addEventListener('submit', formSubmitHandler);
cardAddForm.addEventListener('submit', cardsSubmitHandler);
