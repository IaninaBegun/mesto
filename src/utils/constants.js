export const initialCards = [
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

export const formObject = ({
  formSelector: '.input',
  inputSelector: '.input__text',
  submitButtonSelector: '.input__btn',
  inactiveButtonClass: 'input__btn_inactive',
  inputErrorClass: 'input__text_type_error',
  errorClass: 'input__error-message'
});

export const ESC_KEY = "Escape";

export const cardsAddPopup = document.querySelector('.popup_addCards');
export const editProfilePopup = document.querySelector('.popup_editProfile');
export const editProfileAvatarPopup = document.querySelector('.popup_editProfilePicture');
export const enlargedImagePopup = document.querySelector('.popup_enlargeImage');
export const deleteConfirmPopup = document.querySelector('.popup_cardDeleteConfirm');

export const cardSaveButton = document.querySelector('.input__btn_cards');
export const editButton = document.querySelector('.profile__btn_edit');
export const editProfileAvatarButton = document.querySelector('.profile__button_edit-avatar');
export const closeProfileButton = document.getElementById('editProfileCloseBtn');
export const addButton = document.querySelector('.profile__btn_add');
export const saveButton = document.querySelector('.input__btn');
export const closeCardFormButton = document.getElementById('addCardsCloseBtn');
export const closeEnlargedImage = enlargedImagePopup.querySelector('.popup__btn-close_image');

export const editProfileForm = document.querySelector('.input_profile');
export const nameInput = document.querySelector('.input__text_type_name');
export const jobInput = document.querySelector('.input__text_type_bio');
export const profileTitle = document.getElementById('profile-title');
export const profileSubtitle = document.getElementById('profile-subtitle');
export const profilePicture = document.querySelector('.profile__image');
export const cardTemplate = document.querySelector('.card-template');
export const cardsContainer = document.querySelector('.elements__list');
export const cardNameInput = document.getElementById('placeNameInput');
export const cardUrlInput = document.getElementById('placeSourceInput');
export const cardAddForm = document.querySelector('.input_cards');
export const popupImage = enlargedImagePopup.querySelector('.popup__image');
export const popupImageTitle = enlargedImagePopup.querySelector('.popup__title');

export const popups = Array.from(document.querySelectorAll('.popup'));
