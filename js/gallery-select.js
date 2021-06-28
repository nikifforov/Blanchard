const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
      itemSelectText: '',
      placeholder: false,
      searchEnabled: false,
      renderChoiceLimit: 3,
});

let wrapperChoiseList = document.querySelector('.choices');
wrapperChoiseList.addEventListener('click', hideSelectedItem);

function hideSelectedItem() {
  let choicesItem = document.querySelector('.choices__list--single').children[0];
  let choicesListDropdown = document.querySelector('.choices__list--dropdown').children[0];

  for (let i = 0; choicesListDropdown.childElementCount > i; i++) {
    if (choicesListDropdown.children[i].textContent == choicesItem.textContent) {
      choicesListDropdown.children[i].style.display = 'none';
    }
  }
}