import { getWitnesses, useWitness } from "./WitnessProvider.js"





const render = (wArray) => {
    const contentTarget = document.querySelector()
    contentTarget.innerHTML = `<button id="witness"></button>`

}


export const WitnessList = () => {
    getWitnesses
    .then(_ => {
        const witnessArray = useWitness()
        render(witnessArray)
        })
}

