const background = document.getElementById("background-colour");
const rgb_code = document.getElementById("random");

function colorGenerator() {
  const first  = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third  = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${first},${second},${third})`
  background.style.backgroundColor = randomColor;
  rgb_code.innerText = randomColor;
}
