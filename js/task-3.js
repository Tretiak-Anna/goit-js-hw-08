const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  let trimmedText = event.target.value.trim();
  if (trimmedText === '') {
    trimmedText = 'Anonymous';
  }
  output.textContent = trimmedText;
}
