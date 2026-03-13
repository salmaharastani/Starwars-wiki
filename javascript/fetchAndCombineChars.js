 const akababUrl = "https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json";
const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"
 
 export async function fetchAndCombineSWData() {

    const [akababRes, dataBankRes] = await Promise.all([
        fetch(akababUrl).then(res => res.json()),
        fetch(dataBankUrl).then(res => res.json())

    ])

    const combineData = akababRes.map(char => {
        const dataBankCharacters = dataBankRes.data

        const matchNames = dataBankCharacters.find(dbChar => dbChar.name === char.name)

        const newData = {
            name: char.name,
            image: char.image,
            affiliations: char.affiliations,
            description: matchNames ? matchNames.description : "No description found"
        }

        return newData
    })
     console.log('Combined data:', combineData)
    return combineData
   

}