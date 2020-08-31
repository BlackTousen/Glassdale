import { useCriminals } from "./CriminalProvider.js"

export const CriminalList = () => {
    let list = useCriminals()
    let contentHTML = ""
    list.forEach( x => { 
       contentHTML += `<section class="criminal" id="criminal--${x.id}">
     <h2 class="criminal__name">${x.name}</h2>
     <div class="criminal__properties">
     <p>Age: ${x.age}</p>
     <p>Crime: ${x.conviction}</p>
     <p>Term Start: ${new Date(x.incarceration.start).toLocaleDateString('en-US')}</p>
     <p>Term End: ${new Date(x.incarceration.end).toLocaleDateString('en-US')}</p>
     </div>
   </section>`
    })
   return contentHTML
}