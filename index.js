const background = document.getElementById("background-colour");
const rgb_code=document.getElementById(
  "random"
)
const arr = [];
for (let i = 0; i < 256; i++) {
  arr.push(i);
}
function colorGenerator() {
  let first = arr[Math.floor(Math.random() * 256)];
  let second = arr[Math.floor(Math.random() * 256)];
  let third = arr[Math.floor(Math.random() * 256)];
  background.style.backgroundColor = `rgb(${first},${second},${third})`;
  rgb_code.innerText = `rgb(${first},${second},${third})`;
}
