const btnLike = document.querySelector('.element__like');
const btnEdit = document.querySelector('.profile-info__edit-btn');
const popup = document.querySelector('.popup');
const btnPopupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile-info__name');
const profileDesc = document.querySelector('.profile-info__description');
const formElement = document.querySelector('.form');
const inputProfileName = document.querySelector('.form__item_el_heading');
const inputProfileDesc = document.querySelector('.form__item_el_desc');


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDesc.textContent = inputProfileDesc.value;
  popup.classList.remove('popup_opened');
}


formElement.addEventListener('submit', formSubmitHandler);


btnEdit.addEventListener('click', function() {
  inputProfileName.value = profileName.innerText;
  inputProfileDesc.value = profileDesc.innerText;
  popup.classList.add('popup_opened');
})

btnPopupClose.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})

function like() {
    btnLike.classList.toggle('element__like_active');
}

btnLike.addEventListener('click', like);