import { useCriminals, getCriminals } from "./criminals/CriminalProvider.js"
import { getOfficers } from "./officers/OfficerProvider.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { CriminalList } from "./criminals/Criminal.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./Notes/NoteForm.js"
import { getWitnesses } from "./witness/WitnessProvider.js"
// getCriminals()
// .then(_ => {
//     const contentTarget = document.querySelector(".criminalsContainer")
//     contentTarget.innerHTML += CriminalList()
// })
// getOfficers();
// getConvictions()
// .then(_ => ConvictionSelect())
NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
getWitnesses()