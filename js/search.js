console.log(window.location.href)
let link = window.location.href
let old_search = link.slice(link.indexOf("?") + 9, link.indexOf("&"))
console.log(old_search)
let foodid = link.slice(link.indexOf("&") + 4, link.length)
console.log(foodid)




async function sendApiRequest() {
    let APP_ID = "3f97b681";
    let API_KEY = "b1f354a8a8a66e0cce2c61b66283405e";
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${old_search}&from=0&to=100&balanced`);
    console.log(old_search)
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

sendApiRequest()
function useApiData(data) {
    /* let i = 0;
     let MAX_NUMBER = 2
     let MIN_NUMBER = 0
     let randd = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
     let size_card = ["card_large", "card_medium", "card_small"]
 console.log(randd)
 console.log(size_card[randd])
 document.querySelector("#pin_c").innerHTML = ``
 while (i < 99) {
 //i = i + 1;
 //if (data.hits[i].recipe.calories < 800) {
 
     document.querySelector("#pin_c").innerHTML += `
       <div class="card ${size_card[randd]}">
       <a href="foodclick.html?q=${i}" class="fulll"  target="_blank"><img src="${data.hits[i].recipe.image}" alt="" id=${i} class="fruit1"> 
       <p class="para h5">${data.hits[i].recipe.label}</p></a>
   
       </div>
       `
  
  
     randd = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
   }
  
  
  
    //}*/

    document.querySelector("#labels").innerHTML += `
    <h1>${data.hits[foodid].recipe.label}</h1>
    `
    document.querySelector("#image").innerHTML += `
   
    <img src="${data.hits[foodid].recipe.image}" alt="" class="fruit1"> 
    
    `
    let j = 0;
    while (j < data.hits[0].recipe.ingredientLines.length) {

        document.querySelector("#ingredients").innerHTML += `
        <li>
        ${data.hits[0].recipe.ingredientLines[j]}
        </li>
        
        `
        j = j + 1;
    }
   
}
