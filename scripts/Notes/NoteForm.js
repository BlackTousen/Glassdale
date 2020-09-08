import { saveNote } from "./NoteDataProvider.js";
import { useOfficers, getOfficers } from "../officers/OfficerProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");
const eventHub = document.querySelector(".container");

const render = (officerCollection) => {
  console.log("rendering officers dropdown");
  contentTarget.innerHTML = `
    <label for="note-text">Text</label><input type="text" id="note-text">
    <select class="dropdown" id="note-suspect">
    <label for="note-suspect">Suspect</label>
        <option value="0">Please select a criminal...</option>
    ${officerCollection.map((cObj) => {
      return `<option id="${cObj.id}" value="${cObj.name}">${cObj.name}</option>`;
    })}
</select>

    <button id="saveNote">Save Note</button>
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  if (clickEvent.target.id === "saveNote") {
      console.log("dropdown value",document.getElementById("note-suspect").value)
    if (document.getElementById("note-suspect").value === "0") {
      window.alert("Must choose a suspect!");
    } else {
      // Make a new object representation of a note
      const newNote = {
        // Key/value pairs here
        text: document.getElementById("note-text").value,
        date: Date.now(),
        suspect: document.getElementById("note-suspect").value,
      };

      // Change API state and application state
      saveNote(newNote);
    }
  }
});

export const NoteForm = () => {
  let officerCollection;
  getOfficers()
    .then((_) => (officerCollection = useOfficers()))
    .then((_) => render(officerCollection));
};
