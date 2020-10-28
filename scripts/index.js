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

const page = document.querySelector('.page');
const cardsAddPopup = document.querySelector('.popup_addCards');
const editProfile = document.querySelector('.popup_editProfile');
const enlargeImage = document.querySelector('.popup_enlargeImage');

const cardSaveButton = document.querySelector('.input__btn_cards');
const editButton = document.querySelector('.profile__btn_edit');
const closeProfileButton = document.getElementById('editProfileCloseBtn');
const addButton = document.querySelector('.profile__btn_add');
const saveButton = document.querySelector('.input__btn');
const closeCardFormButton = document.getElementById('addCardsCloseBtn');
const closeEnlargedImage = enlargeImage.querySelector('.popup__btn-close_image');

const editProfileForm = document.querySelector('.input_profile')
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_bio');
const profileTitle = document.getElementById('profile-title');
const profileSubtitle = document.getElementById('profile-subtitle');
const cardTemplate = document.querySelector('.card-template');
const cardsList = document.querySelector('.elements__list');
const cardNameInput = document.getElementById('placeNameInput');
const cardUrlInput = document.getElementById('placeSourceInput');
const cardAddForm = document.querySelector('.input_cards');
const popupImage = enlargeImage.querySelector('.popup__image');
const popupImageTitle = enlargeImage.querySelector('.popup__title');

const popups = Array.from(document.querySelectorAll('.popup'));


const createCards = (data) => {
  const card = cardTemplate.content.cloneNode(true);
  const cardText = card.querySelector('.elements__title');
  const cardImage = card.querySelector('.elements__image');

  cardText.innerText = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const likesButton = card.querySelector('.elements__btn-like');
  const deleteButton = card.querySelector('.elements__btn-erase');

  function largeImagePopup() {
    togglePopup(enlargeImage);
    popupImage.src = cardImage.src;
    popupImageTitle.innerText = cardText.innerText;
    popupImage.alt = cardText.innerText;
  }

  deleteButton.addEventListener('click', handlerDelete);
  likesButton.addEventListener('click', handlerLikes);

  cardImage.addEventListener('click', largeImagePopup);

  return card;
};

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

  function closePopupByEscape (evt) {
    if (evt.key === "Escape") {
      popUp.classList.remove('popup_opened');
    }
  }

  if (popUp.classList.contains('popup_opened')) {
    page.addEventListener('keydown',closePopupByEscape);
  } else {
    page.removeEventListener('keydown',closePopupByEscape);
  }
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
  const item =  createCards({
      name: cardNameInput.value,
      link: cardUrlInput.value
    });

  cardsList.prepend(item);

  cardAddForm.reset();
}

function cardsSubmitHandler (evt) {
  evt.preventDefault();
  addCards();
  togglePopup(cardsAddPopup);
}

function closePopups (evt) {
  evt.stopPropagation();
  evt.target.classList.remove('popup_opened');
}

const popupsClosingHandler = () => {
  popups.forEach((popup) => {
    popup.addEventListener('click', closePopups);
  });
};

renderList();
bindHandlers();
popupsClosingHandler();

closeProfileButton.addEventListener('click', () => togglePopup(editProfile));
editProfileForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', () => togglePopup(editProfile), insertUserData());
cardAddForm.addEventListener('submit', cardsSubmitHandler);
closeEnlargedImage.addEventListener('click', () => togglePopup(enlargeImage));

