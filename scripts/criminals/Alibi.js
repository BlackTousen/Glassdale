import { useCriminals } from "./CriminalProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("alibiClicked", (e) => {
  const targetCriminal = useCriminals().find((criminal) => {
    return criminal.id === parseInt(e.detail.chosenCriminal);
  });

  const alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`);
  const hTarget = alibiTarget.querySelector("h4");
  if (alibiTarget.contains(hTarget)) {
    alibiTarget.innerHTML = "";
  } else {
    alibiTarget.innerHTML = `
        ${targetCriminal.known_associates
          .map((associate) => {
            return `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
            `;
          })
          .join("")}
        `;
  }
});

export const AlibiDialog = (x) => {
  return `
    <span class="alibiDialog--${x}"></span>
`;
};
