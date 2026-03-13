

import { fetchAndCombineSWData} from "./fetchAndCombineChars.js";
const JediCard = document.querySelector("#jedi")
console.log(JediCard)



async function getAndRenderJedi(){
    const chars = await fetchAndCombineSWData()
        const jedi = chars.filter(char => char.affiliations?.includes("Jedi Order"));
    console.log("Hittade jedi:", jedi)
    renderJedi(jedi)
}
getAndRenderJedi()

  const renderJedi = async (jedi) => {
   
    jedi.forEach(j => {
        const charDiv = document.createElement('div')
        const charImgEl = document.createElement('img')
        const charNameEl = document.createElement('h1')
        const charDesEl = document.createElement('p')

        const name = j.name
        const description = j.description
        const charImg = j.image

        charImgEl.classList.add('charImg')
        charDiv.classList.add('charDiv')

        charImgEl.src = charImg
        charNameEl.innerText = name
        charDesEl.innerText = `Description: ${description}`


        charDiv.append(charImgEl, charNameEl, charDesEl)
        JediCard.append(charDiv)

    });
}

