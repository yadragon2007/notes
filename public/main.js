// the body
const body = document.querySelector("body");
// plus button
const addNoteBtn = document.getElementById("add-note");
// cross btn to close the note board
const cross = document.querySelector("#cross");
// the container of the note board
const addNoteBoard = document.getElementById("dashboard");
// the note board
const noteBoard = document.querySelector(".note-board");
// form
const form = document.querySelector("#form");
// the inputs into the note board
const title = document.querySelector(".note-board input");
const textarea = document.querySelector(".note-board textarea");
const deleteNoteBtn = document.querySelector(".deleteNoteBtn");
const bgColorCodeInput = document.querySelector("#bgColorCodeInput");
const bgColorNameInput = document.querySelector("#bgColorNameInput");
// background colors
const colors = [
  { name: "light-green", code: "#90EE90" },
  { name: "light-pink", code: "#FFB6C1" },
  { name: "light-yellow", code: "#FFFFE0" },
  { name: "light-grey", code: "#D3D3D3" },
  { name: "lavender", code: "#E6E6FA" },
  { name: "peach", code: "#FFDAB9" },
  { name: "mint-green", code: "#98FB98" },
  { name: "pale-purple", code: "#D8BFD8" },
  { name: "sky-blue", code: "#87CEEB" },
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
    noteBoard.style.background = colors[num].code;
    bgColorCodeInput.value = colors[num].code;
    bgColorNameInput.value = colors[num].name;
    body.style.overflow = "hidden";
    form.action = "/note/add";
  } else {
    title.value = "";
    textarea.value = "";
    addNoteBoard.style.display = "none";
    body.style.overflowY = "auto";
  }
}
// eidtNote
async function eidtNote_getData(noteIndex, userId) {
  runLoader();
  // get the data from data base by fetch req
  const userData = await fetch("/account/getData", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  });
  const user = await userData.json();
  const note = user.notes[noteIndex];

  runLoader();

  eidtNote_openNote(note, noteIndex);
}
function runLoader() {
  let loaderContainer = document.querySelector(".loaderContainer");
  if (loaderContainer.style.display == "none") {
    loaderContainer.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    loaderContainer.style.display = "none";
    body.style.overflowY = "auto";
  }
}
function eidtNote_openNote(note, noteIndex) {
  addNoteBoard.style.display = "block";
  noteBoard.style.background = note.bgColorCode;
  body.style.overflow = "hidden";

  form.action = `/note/update/${noteIndex}`;
  bgColorCodeInput.value = note.bgColorCode;
  bgColorNameInput.value = note.bgColorName;
  title.value = note.noteTitle;
  textarea.value = note.notebody;

  deleteNoteBtn.id = noteIndex;
}
// delete req
async function deleteNote(userId, noteIndex) {
  let note = document.getElementById(`note${noteIndex}`);
  note.style.display = "none";
  addNoteBoardAdd(null);
  runLoader();
  await fetch("/note/delete", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ noteIndex: noteIndex }),
  });
  runLoader();
  window.href = "/";
}
