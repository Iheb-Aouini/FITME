(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();
let food_ids;
let searchButton = document.querySelector("#search")
let sfood = "healthy"
/*if (sfood == null) {
  sfood = "healthy"
}*/
document.querySelector("#pin_c").innerHTML = ` `;

function search_recipe() {
  sfood = document.querySelector("#req").value
  console.log("button")
  console.log(sfood)
  sendApiRequest()

}


document.getElementById("req").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sfood = document.querySelector("#req").value
    event.preventDefault();
    console.log(sfood)
    sendApiRequest();
  }
});


let inpt = document.querySelector("#inpt");
/*inpt.addEventListener("click", () => {
  sfood = document.querySelector("#req").value
  console.log("button")
  console.log(sfood)
  sendApiRequest()
})*/

let first_pages = 0;
let last_pages = 99;

async function sendApiRequest() {
  let APP_ID = "3f97b681";
  let API_KEY = "b1f354a8a8a66e0cce2c61b66283405e";
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${sfood}&from=${first_pages}&to=${last_pages}`);
  console.log(sfood)
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function autoscroll() {
  getElementById("scrole").click()
  console.log("test")
}

function useApiData(data) {
  let i = 0;
  let MAX_NUMBER = 2
  let MIN_NUMBER = 0
  let randd = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
  let size_card = ["card_large", "card_medium", "card_small"]
  //console.log(randd)
  //console.log(size_card[randd])


  window.addEventListener("scroll", () => {
    /*
    const { bar } = foo; // where foo = { bar:10, baz:12 };
 This creates a constant with the name 'bar', which has a value of 10 */

    const { scrollHeight, scrollTop } = document.documentElement;
    console.log(document.documentElement.scrollTop);
  })
  if (data.hits.length == 0) {
    window.open("not_found.html")
    /*
    document.querySelector("#pin_c").innerHTML = `
    <img src="images/not_found.png" class="center" id="robott" >
        <h1 class="not_found_h1" id="ssc">OOPS !  No results found for this recipe  </h1>
        <a href="#ssc" id="scrole">click me</a>
        `*/
    document.getElementById("scrole").click()
    console.log("test")


  }
  else {
    document.querySelector("#pin_c").innerHTML = ``

    while (i < 99) {
      i = i + 1;
      //if (data.hits[i].recipe.calories < 800) {
      /*    document.querySelector("#foods").innerHTML += `<div class="col">
    <div class="card bg-dark text-white">
      <img src="${data.hits[i].recipe.image}" class="card-img" alt="...">
      <div class="card-img-overlay">
        <h5 class="card-title">${data.hits[i].recipe.label}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    
    `*/

      let url = data.hits[i].recipe.image;
      //let url = "https://edamam-product-images.s3.amazonaws.com/web-img/77f/77f41b1a49262ce0bc56c9d30ebb1665.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLWVhc3QtMSJHMEUCIQDdyCsK%2F8cFMB0uMHM9t423dPtkH9fr53n3meiMhinuJgIgAVWdA%2F6wIpNMoejwINYJxEGK%2BgWe4UxFVlkZhKbq%2FXUqgwQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDP5Q%2FcN7%2F2VyeqSRMirXA7lo8ddVuYxD3aZ8wyFqhE04iVKg%2BQP%2Fk3QYH1SNzv4dyvyx0HPkQmPxVTiuY927sXLgIfkVCYqExlZ%2FrcPUtgLz%2F2baNv1P4W90jbrR2MutrCV447ZChLGiQkYL%2FvGgUBqJhabMXfbkEg8w4OYGbiAS%2BaSJxAsZYcE%2BS5PfgPHgIZtQAZvHWMd9Q%2BlY7UyM30yg8%2FRb%2BktZ8u7wSbOzZSoM84HljaS2XwKwI6fqVY8rp3JVTnwl%2FtVOHzj8mRI1dANQ%2FALtrZ%2BnDBdhoIQvnsVwXXr5GCfUrx3xtC6cQ8XTtDwa3yMJPrRdWMZ7%2BIcuErPIqbmQbZK6Ym5zzEFKU3WRwSJdbYu9IJ4VMVNxEjYimDkV70Al0YtLZz4e4r3zZKThWQfqMfDHBlsmXj6cPdzv7Tj%2F8JdqygtP3VGEz7Itx5Yw%2F8oQJr48IdYkxfMOYpCfpv8iF8q1sDElnUphp3FJ3g0q83zyBXUx9ahI36JpgeBLlKn5DL%2F1AZ7k%2BS0f75fQLyOqrfDmSFXL6jqlJ08o6uzzV45eQHehtzm5TS02nIL7M998dkc5YW4D%2FTaIYdpCPPcGg6jUpTpwiYmGdYYfBR%2FEVfayV0AfffhkVL4Ac3RRSvNtgzDr%2BvKSBjqlAciCTdY%2FVNjgTIHhshumqrvm6laE%2FQ1nLdzGjk1mxGzVukG4BGC7Zf%2FUKif1p2Y3G1nWOVQeb9%2BsQG2K%2BGTXimIm0RhUV60KYOGqBcHK8C5TZpKwziCP%2BixN0x9lpZUOOkmMwCMYpiQ7S025WUGT88mtZZDaG46h1Ju%2FMFo11aqh%2FhkFnH16ssuyblV%2FJZbXepXXFqdzfA%2Fw0evyMUGhheK%2BLJiGtw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220418T015111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFG7USP4UO%2F20220418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ad5d0e00047504e8cd07e9d8bedfce816cac114087f055319933cdfe76bce96"



      if (data.hits[i].recipe.calories < 800) {

        document.querySelector("#pin_c").innerHTML += `
      <div class="card ${size_card[randd]}">
      <a href="foodclick.html?q=${sfood}&id=${i}" class="fulll"  target="_blank"><img src="${data.hits[i].recipe.image}" alt="" id=${i} class="fruit1"> </a>
      <div class="favor"> <i class="fa-solid fa-heart-circle-plus bookm"></i> </div>
    
      <div class="food_label">
      <marquee class="para" scrollamount=4>${data.hits[i].recipe.label}</marquee>
      </div>
      <div class="downloads">
      <a  hreflang="${url}" rel="noopener noreferrer"  download="image${i}.jpg" onclick="downloadhref(this.id,this.hreflang)" id="${i}+a" target="_blank"><i class="fa-solid fa-download downl"></i></div></a>
      </div>
      `;


        randd = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
      }

    }
  }


}



//convert image to base64 to be able to download it

function getURLBase64(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (this.status === 200) {
        var blob = this.response
        //console.log(blob)
        var fileReader = new FileReader()
        fileReader.onloadend = function (e) {
          var result = e.target.result
          resolve(result)

          /*  document.querySelector("#work").innerHTML = `
                      <a download="image1.jpg" href="${result}">Download</a>
                      `*/
        }
        fileReader.readAsDataURL(blob)
      }

    }
    xhr.onerror = function () {
      reject()
      // console.log("test")
    }

    xhr.send()
    //console.log(xhr)
  })
}

//// finallyyy itttttttttttttt worrrrrrrrrrkeeeeeeeeeeeeeeeddddddddd hamdulah
function downloadhref(id, hreff) {
  //getURLBase64(url).then(value => );
  console.log(id);
  link = document.getElementById(id);
  //console.log("#" + id)
  console.log(link.hreflang)
  //console.log(hreff)

  getURLBase64(hreff).then(value => link.href = value);
  link.click();


}

















function not_found_fix() {
  document.querySelector("#pin_c").innerHTML = ` `;
}


//response.data.pipe(fs.createWriteStream('https://edamam-product-images.s3.amazonaws.com/web-img/e35/e35b20e86867be4ecf1fd6c6a077effd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLWVhc3QtMSJHMEUCIQDpCltbLG3mFMTLegddGurUKUV1WSKkhqJvhgcBgVKfFQIgUeVWkYytNw4AG%2Fr9SjkL75xYHUHCjVkgRD0aU4T7OKoqgwQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDIbDvDSVnSbMY%2FYg3CrXA1D8mrMUwqRIvPX1HlSvghcuXKaa0SXxx3Avb9dNzE3VAjyzrKXL7WM34wF6cZkTubG%2BL2vfc8NsBNRXp126CibBhe0egRMOj5mxDyPRFMi2WoGmLJXy7dfLIOauhYvN26ceTzLM%2BZKVP3eD3UHMJ%2BQ1SJ%2Fj3oVNwzxjzB4MyY8XihKhmmJSUbnLsl1w6Btzj%2BhSqVA1fGoIrtVVob1vnEA5i7jbLjTzDDnfxMl03lXNUiwdvONp7JCpHyyv5QqlZqX%2FdSa0BsR%2BgxIY6Pnhbdog%2B2%2B5FO3aMmbCQYPop0kuigJ57byXprYuacMrT6gflJu%2Fq1NO1dcBamZaVd4p3xRd2YzevzdNYZRmVgLeDRMwBE1CnlJi%2ByNnqbOseaRDOHpTGHVeqs%2F%2FLlUW%2BKoNRi6rBf%2BcN9ZgoEPhhAYgZUkd9PA844inkLazv1nTWcbQFmdIMZ05GwWP4sPZyWl1PIUc9INBdmS%2FOEl0OXvEcekeqzSuj2ahavgir4nb1WvL4dfUltYmJnYC20UmqfMeD8MduD3Ca3A24OjtcG8ZEAxb920MteRYSpZh0x2CgV0W7DSqZBkmWPdfczVJqhcwIz1DUbTEr5tEtdWiKs2OV0Je%2FFAEcZTJcTDQ%2Fe2SBjqlAcOhmRWCfr62h3MQsdClLsX4HGGqJYU7FixZhDIEHbDo%2FCH1Uh0WYcsaNPRykaar6yt8aFf0Kr5uKnGaWDF2G0TQIokxcKSE7SWxggEx1W58BovxLMqO4DM52fMtOIkoUdrZOYJ3tvbOKVgyoEuCKw7zLEkrL2fF6E6kXd2QG%2Fjop4TYasQIChQAI%2B%2FEUI2oCR1M0bnXBO4ZCDp1OJcfK0pQK1F7gg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T042919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKF7PHX6Q%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=862daf5d59ae75d6e07bda918480a4697ec60721a18276edc713d19567fde70d'));