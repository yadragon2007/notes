// the body
const body = document.querySelector("body");
// plus button
const addNoteBtn = document.getElementById("add-note");
// cross btn to close the note board
const cross = document.querySelector('#cross')
// the container of the note board
const addNoteBoard = document.getElementById("dashboard");
// the note board
const noteBoard = document.querySelector(".note-board")
// the inputs into the note board
const title = document.querySelector(".note-board input")
const textarea = document.querySelector(".note-board textarea")
const bgColorInput = document.querySelector("#bgColorInput")
// background colors
const colors = [
  "#ADD8E6",
  "#90EE90",
  "#FFB6C1",
  "#FFFFE0",
  "#D3D3D3",
  "#E6E6FA",
  "#FFDAB9",
  "#98FB98",
  "#D8BFD8",
  "#87CEEB",
];

addNoteBtn.addEventListener("click", () => {
  const num = Math.floor(Math.random() * 10);
  addNoteBoardAdd(num);
});

cross.addEventListener("click", () => {
  addNoteBoardAdd(null);
});

function addNoteBoardAdd(num) {
  if (addNoteBoard.style.display == "none") {
    addNoteBoard.style.display = "block";
    noteBoard.style.background = colors[num]
    bgColorInput.value = colors[num]
    body.style.overflow = "hidden";
  } else {
    title.value = ''
    textarea.value = ''
    addNoteBoard.style.display = "none";
    body.style.overflowY = "scroll";
  }
}
