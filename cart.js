let cart = document.querySelector(".cart");
let apiData = [];
let searchName;

fetch("https://api.jikan.moe/v4/top/anime?type=ona")
.then((response) => response.json())
.then((data)=>{
    console.log(data);
    apiData = data.data
    apiData.forEach((product) => {
        prodectCardData(product)
    });
});

function prodectCardData(anime){
    let cardList = document.createElement("div")
    cardList.className = "cardList"

    cardList.innerHTML = `
    <img class= "anime-image" src="${anime.images.jpg.image_url}"/>
    <button class="status">${anime.status}</button>
    <h3>${anime.title}</h3>
    <p class="episodes">${anime.episodes} Episodes</p>
    <p class="score">&#10025;&#10025; ${anime.score}        <span># ${anime.rank}</span> </p>
    <p class="users">${anime.scored_by} users <span>            Ranking</span></p>
    <button class="name">${anime.genres[0].name}</button>
     <button class="producerName">${anime.producers[0].name}</button>
    `
    //  data-url="${anime.url}"
    // const image = cardList.querySelector(".anime-image")
    cardList.addEventListener("click",()=>{
    window.open (anime.url)
    })
    
    // <button>${anime.studios[0].mal_id}</button>
    // <p>${product.title}</p>
    cart.appendChild(cardList)
};
// function detalesPage(){
//     window.location.herf =  `${apiData.url}`
    
// }

function searchAnime(event){
    let name = event.target.value
    searchName = apiData.filter((item)=>{
        let titleuppercase = name.toUpperCase()
        let itemuppercase = item.title.toUpperCase()
        return itemuppercase.includes(titleuppercase)
    })
    cart.innerHTML = ""
    searchName.forEach((product)=>{
        prodectCardData(product)
    })
};
// searchAnime()