import { fetchAndCombineSWData} from "./fetchAndCombineChars.js";
const sithCard = document.querySelector("#sith")

async function getAndRenderSith() {
    const chars =  await fetchAndCombineSWData()

     const sith = chars.filter(char => char.affiliations?.includes("Sith"));
    console.log("Hittade sith:", sith)
    renderSith(sith)
}
getAndRenderSith()


export const renderSith = async (sith) => {
   
    sith.forEach(s => {
        const charDiv = document.createElement('div')
        const charImgEl = document.createElement('img')
        const charNameEl = document.createElement('h1')
        const charDesEl = document.createElement('p')

        const name = s.name
        const description = s.description
        const charImg = s.image

        charImgEl.classList.add('charImg')
        charDiv.classList.add('charDiv')

        charImgEl.src = charImg
        charNameEl.innerText = name
        charDesEl.innerText = `Description: ${description}`


        charDiv.append(charImgEl, charNameEl, charDesEl)
        sithCard.append(charDiv)

    });
}