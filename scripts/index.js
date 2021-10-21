const btnLike = document.querySelector('.element__like');
const btnEdit = document.querySelector('.profile-info__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const popup = document.querySelector('.popup');
const btnPopupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile-info__name');
const profileDesc = document.querySelector('.profile-info__description');
const formElement = document.querySelector('.form');
const inputProfileName = document.querySelector('.form__item_el_heading');
const inputProfileDesc = document.querySelector('.form__item_el_desc');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDesc.textContent = inputProfileDesc.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

btnEdit.addEventListener('click', function() {
  inputProfileName.value = profileName.innerText;
  inputProfileDesc.value = profileDesc.innerText;
  openPopup();
})

btnPopupClose.addEventListener('click', function() {
  closePopup();
})

popup.addEventListener('click', function() {
  if (Event.target === Event.currentTarget) {
    closePopup();
  }
})






