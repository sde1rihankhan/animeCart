let cart = document.querySelector(".detalsCart")
let apiData = []

fetch("https://api.jikan.moe/v4/top/anime?type=ona")
.then((res) => res.json())
.then((data)=>{
    console.log(data)
    apiData = data.data
    apiData.forEach(animeData => {
    animeCartsData(animeData)
    });
})

function animeCartsData(anime){
    let cardList = document.createElement("div")

    cardList.innerHTML =`
    <img src="${anime.images.jpg.image_url}">
    `






    cart.appendChild(cardList)
}