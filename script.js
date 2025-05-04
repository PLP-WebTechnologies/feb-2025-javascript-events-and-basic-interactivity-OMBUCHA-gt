// Button Click
const clickBtn = document.getElementById("click-btn");
clickBtn.addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover Effect
const hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#ffcc00"; // change color on hover
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#f3f3f3"; // reset color when mouse leaves
});

// Keypress Detection
const keypressInput = document.getElementById("keypress-input");
keypressInput.addEventListener("keypress", (e) => {
  console.log(`You pressed the key: ${e.key}`);
});

// Double Click and Long Press
let timeout;
const secretAction = document.getElementById("secret-action");
secretAction.addEventListener("dblclick", () => {
  alert("You double-clicked me!");
});
secretAction.addEventListener("mousedown", () => {
  timeout = setTimeout(() => {
    alert("You held the mouse down for too long!");
  }, 1000); // long press after 1 second
});
secretAction.addEventListener("mouseup", () => {
  clearTimeout(timeout);
});
