import { getOfficers, useOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
const render = convictionsCollection => {
    console.log("Rendering Officers Dropdown")
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                convictionsCollection.map((cObj) => {
                    const obj = cObj.name
                    return `<option id="${cObj.id}" value="${obj}">${obj}</option>`
                })
            }
        </select>
    `
}


export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const convictions = useOfficers()
            render(convictions)
        })
}
