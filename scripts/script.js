let editButton = document.querySelector('.profile__btn_edit');
let closeButton = document.querySelector('.popup__btn-close');
let popUp = document.querySelector('.popup');
let saveButton = document.querySelector('.input__btn');
let formElement = document.querySelector('.input');
let nameInput = document.querySelector('.input__text_type_name');
let jobInput = document.querySelector('.input__text_type_bio');
let profileTitle = document.getElementById('profile-title');
let profileSubtitle = document.getElementById('profile-subtitle');

function openPopup() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}


function closePopup() {
  popUp.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
	evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


