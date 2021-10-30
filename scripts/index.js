const btnEdit = document.querySelector('.profile-info__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const btnDelete = document.querySelector('.element__delete');
const btnPopupClose = document.querySelectorAll('.popup__close');

const popupEditProfile = document.querySelector('.popup_edit');
const popupAddPic = document.querySelector('.popup_add-pic');

const popupPhoto = document.querySelector('.popup_figure');
const popupPhotoPic = document.querySelector('.figure__pic');
const popupPhotoDesc = document.querySelector('.figure__caption');

const profileName = document.querySelector('.profile-info__name');
const profileDesc = document.querySelector('.profile-info__description');
const formEdit = document.querySelector('.form_edit');
const formAdd = document.querySelector('.form_add');
const inputProfileName = document.querySelector('.form__item_el_heading');
const inputProfileDesc = document.querySelector('.form__item_el_desc');

const elements = document.querySelector('.elements__list');
const elementPhoto = document.querySelector('.element__photo');
const inputNamePic = document.querySelector('.form__item_el_namePic');
const inputUrlPic = document.querySelector('.form__item_el_url');

const openPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');
const renderCard = (picElement) => elements.prepend(picElement);

const editFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDesc.textContent = inputProfileDesc.value;
  return closePopup(evt.target.parentNode.parentNode);
}

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();
  const card = createCard(inputNamePic.value, inputUrlPic.value);
  renderCard(card);
  return closePopup(evt.target.parentNode.parentNode);
}

btnEdit.addEventListener('click', () => {
  inputProfileName.value = profileName.innerText;
  inputProfileDesc.value = profileDesc.innerText;
  return openPopup(popupEditProfile);
})



function createCard(inputNamePic, inputUrlPic) {
  const elementTemplate = document.querySelector('#element-template').content;
  const picElement = elementTemplate.querySelector('.element').cloneNode(true);

  picElement.querySelector('.element__photo').src = inputUrlPic;
  picElement.querySelector('.element__photo').alt = "Фото";
  picElement.querySelector('.element__title').textContent = inputNamePic;
  picElement.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  })
  picElement.querySelector('.element__delete').addEventListener('click', (evt) => {
    evt.target.parentNode.remove();
  })
  picElement.querySelector('.element__photo').addEventListener('click', (evt) => {
    popupPhotoPic.src = evt.target.currentSrc;
    popupPhotoPic.alt = "Фото";
    popupPhotoDesc.textContent = evt.target.nextSibling.parentNode.innerText;
    openPopup(popupPhoto);
  })
  return picElement;
}

btnPopupClose.forEach((buttonClose) => {
  buttonClose.addEventListener('click', () => closePopup(buttonClose.parentNode.parentNode))
});

initialCards.forEach((item) => {
 const card = createCard(item.name, item.link);
 return renderCard(card);
})

btnAdd.addEventListener('click', () => openPopup(popupAddPic));
formEdit.addEventListener('submit', editFormSubmitHandler);
formAdd.addEventListener('submit', addFormSubmitHandler);





