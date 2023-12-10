const addNoteBtn = document.getElementById("add-note");
const addNoteBoard = document.getElementById("dashboard");
const body = document.querySelector("body");

addNoteBtn.addEventListener("click", () => {
  addNoteBoard.style.display = "block";
  body.style.overflow = "hidden";
});
