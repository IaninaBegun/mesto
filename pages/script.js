let editButton = document.querySelector('.profile__btn_edit');
let closeButton = document.querySelector('.popup__btn-close');
let Popup = document.querySelector('.popup');
let saveButton = document.querySelector('.input__btn');

function openPopup() {
  Popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  Popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);


// Находим форму в DOM
let formElement = document.querySelector('.input');// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
												// Так мы можем определить свою логику отправки.
												// О том, как это делать, расскажем позже.

	// Находим поля формы в DOM
	let nameInput = document.querySelector('.input__text_type_name');// Воспользуйтесь инструментом .querySelector()
	let jobInput = document.querySelector('.input__text_type_bio');// Воспользуйтесь инструментом .querySelector()

  // Получите значение полей из свойства value
  nameInput.value;
  jobInput.value;


  // Выберите элементы, куда должны быть вставлены значения полей
  let profileTitle = document.getElementById('profile-title');
  let profileSubtitle = document.getElementById('profile-subtitle');

  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', closePopup);

