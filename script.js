const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Hey, you clicked the button");
});
