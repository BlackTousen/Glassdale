let convictionsList = []


export const useConvictions = () => {
    return convictionsList.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                convictionsList = parsedCriminals
            }
        )
}