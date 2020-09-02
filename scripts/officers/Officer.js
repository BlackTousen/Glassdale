import { useOfficers } from "./OfficerProvider"



export const OfficerList = () => {
    let list = useOfficers()
    let contentHTML = ""
    list.forEach( x => { 
       contentHTML += `<section class="officer" id="officer--${x.id}">
     <h2 class="officer__name">${x.name}</h2>
     <div class="officer__properties">
     </div>
   </section>`
    })
   return contentHTML
}