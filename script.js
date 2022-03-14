const list = document.querySelector('.list');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');

function addItem(inputText) {
  const item = document.createElement('li');
  const text = document.createElement('p');
  text.textContent = inputText;
  const delBtn = document.createElement('button');
  delBtn.classList.add('del');
  delBtn.textContent = '❌';
  
  item.appendChild(text);
  item.appendChild(delBtn);
  list.appendChild(item);
  item.scrollIntoView({block: 'end', behavior: 'smooth'});
}

function addItemAndResetInput() {
  if (input.value === '')
    return;
  addItem(input.value);
  input.value = '';
}

list.addEventListener('click', (e) => {
  if (e.target.className === 'del') {
    const itemToDelete = e.target.parentElement;
    itemToDelete.remove();
  }
});

addBtn.addEventListener('click', addItemAndResetInput);

input.addEventListener('keydown', (event) => {
  if (event.isComposing)
    return;
  if (event.key == 'Enter') {
    addItemAndResetInput();
  }
});