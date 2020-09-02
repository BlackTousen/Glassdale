import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")
console.log("Conviction Startup")
// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value,
                crimeId: event.target.id
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    console.log("Rendering")

    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((cObj) => {
                    const obj = cObj.name
                    return `<option id="${cObj.id}" value="${obj}">${obj}</option>`
                })
            }
        </select>
    `
}

// const ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()
//     console.log(convictions)
//     render(convictions)
// }
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}
