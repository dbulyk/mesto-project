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
const elements = document.querySelector('.elements__list');
const inputNamePic = document.querySelector('.form__item_el_namePic');
const inputUrlPic = document.querySelector('.form__item_el_url');

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

function addPic(inputNamePic, inputUrlPic) {
  const element = document.createElement('li');
  element.classList.add('element');
  const elementPicture = document.createElement('img');
  elementPicture.classList.add('element__photo');
  elementPicture.src = inputUrlPic;
  elementPicture.alt = "Фото"
  const elementDescription = document.createElement('div');
  elementDescription.classList.add('element__description');
  const elementTitle = document.createElement('p');
  elementTitle.classList.add('element__title');
  elementTitle.textContent = inputNamePic;
  const elementLikeBtn = document.createElement('button');
  elementLikeBtn.classList.add('element__like btn');
  elementLikeBtn.type = 'button';
  elements.insertAdjacentHTML('afterbegin', `
  <li class="element">
    <img src="${inputUrlPic}" alt="Фото" class="element__photo">
    <div class="element__description">
      <p class="element__title">${inputNamePic}</p>
      <button type="button" class="element__like btn"></button>
    </div>
  </li>
  `)}





