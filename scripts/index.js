let editButton = document.querySelector('.profile__btn_edit');
let closeButton = document.querySelector('.popup__btn-close');
let popUp = document.querySelector('.popup');
let saveButton = document.querySelector('.input__btn');
let formElement = document.querySelector('.input');
let nameInput = document.querySelector('.input__text_type_name');
let jobInput = document.querySelector('.input__text_type_bio');
let profileTitle = document.getElementById('profile-title');
let profileSubtitle = document.getElementById('profile-subtitle');


function togglePopup() {

  if (popUp.classList.contains('popup_opened')) {
    popUp.classList.remove('popup_opened');
  } else {
    popUp.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
  }
}

function formSubmitHandler (evt) {
	evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);

