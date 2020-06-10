const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btnDiv = document.getElementById("btn");
const textColor = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random() * color.length);
};

btn.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += color[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  textColor.textContent = hexColor;
  textColor.style.color = hexColor;
});
