import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { AlibiDialog } from "./Alibi.js"


const eventHub = document.querySelector(".container")
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const appStateCriminals = useCriminals()
       const matchingCriminals = appStateCriminals.filter(criminal => {
            if (criminal.conviction === event.detail.crimeThatWasChosen) { return true }
            else {return false}
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
    }
})

eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const matchingOfficers = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        })
        render(matchingOfficers)
})

eventHub.addEventListener("click", event => {
    // How can you access the officer name that was selected by the user?
    if (event.target.id.startsWith("associates--")) {
        let [prefix,id] = event.target.id.split("--")
        const alibiEvent = new CustomEvent("alibiClicked", {
            detail: {
                chosenCriminal: id
            }
        })
        eventHub.dispatchEvent(alibiEvent)
    }
})

const render = criminalCollection => {
    const contentTarget = document.querySelector(".criminalsContainer")

    contentTarget.innerHTML = criminalCollection.map(x =>`
    <section class="criminal" id="criminal--${x.id}">
     <h2 class="criminal__name">${x.name}</h2>
     <div class="criminal__properties">
     <p>Age: ${x.age}</p>
     <p>Crime: ${x.conviction}</p>
     <p>Term Start: ${new Date(x.incarceration.start).toLocaleDateString('en-US')}</p>
     <p>Term End: ${new Date(x.incarceration.end).toLocaleDateString('en-US')}</p>
     </div>
     <button id="associates--${x.id}">Associate Alibis</button>
     ${AlibiDialog(x.id)}
   </section>
    `
    ).join("")
}

