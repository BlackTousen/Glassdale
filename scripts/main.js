import { useCriminals, getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/Criminal.js"
import { getOfficers } from "./officers/OfficerProcider.js"

getCriminals()
.then(_ => {
    const contentTarget = document.querySelector(".criminalsContainer")
    contentTarget.innerHTML += CriminalList()
})
getOfficers()