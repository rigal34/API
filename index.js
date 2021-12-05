
//appeler des element sur le dome 4️⃣
const quote = document.getElementById("quote");
//je creer une fonction1️⃣ 
const getQuote = () => {
fetch('https://api.quotable.io/random') /*va chercher les données*/
.then((res) => res.json())  /**tu me traite res en parametre et tu me traite ensuite en . json */
.then((data) =>   {              /*console.log (data))*/ /*trité en data tu me log*/ 
quote.innerHTML = data.content /**m'affiche les données du contenue */
});
fetch('https://picsum.photos/1600/1000')
.then((res) => {
document.getElementById("pic").innerHTML = 
`<img src=${res.url} />`
});
};
//on creer des evenement 2️⃣
quote.addEventListener('click', () => getQuote());

//on appel des fonction 3️⃣
getQuote();