
const button = document.querySelector('.action-button');

button.addEventListener('click', function () {
  let num1 = parseInt(document.getElementById('number1').value);
  let num2 = parseInt(document.getElementById('number2').value);

  //NWD
  let a = num1;
  let b = num2;
  while(b != 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  let nwd = a;

  //NWW

  let nww = (num1 * num2) / nwd

  document.querySelector('.nwd').innerHTML = `NWW: ${nww} `;
  document.querySelector('.nww').innerHTML = `NWD: ${nwd}`;
});
