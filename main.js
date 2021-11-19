document.querySelector('.btn').addEventListener('click', () => {
  //Your Code
  let counter = 0;
  const inputValue = document.querySelector('.input').value;
  for (let i = 0; i < inputValue.length; i++) {
    const letter = inputValue.charAt(i);
    for (const [key, value] of Object.entries(obj)) {
      if (key === letter) {
        counter += +value;
      } else if (value === letter) {
        counter += +key;
      }
    }
  }
  document.querySelector('.result').innerHTML = counter;
  // console.log(counter);
});
