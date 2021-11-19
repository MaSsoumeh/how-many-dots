document.querySelector('.btn').addEventListener('click', () => {
  //Your Code
  let counter = 0;
  const inputValue = document.querySelector('.input').value;
  console.log(inputValue.length);
  for (let i = 0; i < inputValue.length; i++) {
    const letter = inputValue.charAt(i);
    for (const [key, value] of Object.entries(obj)) {
      if (key === letter) {
        if (letter === 'ی') {
          if (inputValue.charAt(i + 1) !== ' ' && i !== inputValue.length - 1) {
            counter += 2;
          }
        } else {
          counter += +value;
        }
      } else if (value === letter) {
        counter += +key;
      }
    }
  }
  document.querySelector('.result').innerHTML = counter;
  // console.log(counter);
});
