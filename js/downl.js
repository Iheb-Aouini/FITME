/**
 * Modern browsers can download files that aren't from same origin this is a workaround to download a remote file
 * @param `url` Remote URL for the file to be downloaded
 */
function Download({ url, filename }) {
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);

    const download = (url, name) => {
        if (!url) {
            throw new Error("Resource URL not provided! You need to provide one");
        }
        setFetching(true);
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                setFetching(false);
                const blobURL = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = blobURL;
                a.style = "display: none";

                if (name && name.length) a.download = name;
                document.body.appendChild(a);
                a.click();
            })
            .catch(() => setError(true));
    };

    /* return (
         <button
             disabled={creatingURI}
             onClick={download}
             aria-label="download gif"
             className="message__button message__button--dark"
         >
             DOWNLOAD
             <img src={downloadIcon} alt="download"></img>
         </button>
     );
 */



}

/*Download("https://images.unsplash.com/photo-1630207831419-3532bcb828d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80")

  <button
      disabled=${fetching}
      onClick={()=> download(url, filename)}
      aria-label="download gif"
    >
      DOWNLOAD
    </button>
`*/

/*let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

link.href = URL.createObjectURL(blob);

link.click();

URL.revokeObjectURL(link.href);*/
// берём любое изображение



/*
let img = document.querySelector('img');

// создаём <canvas> того же размера
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// копируем изображение в  canvas (метод позволяет вырезать часть изображения)
context.drawImage(img, 0, 0);
// мы можем вращать изображение при помощи context.rotate() и делать множество других преобразований

// toBlob является асинхронной операцией, для которой callback-функция вызывается при завершении
canvas.toBlob(function (blob) {
    // после того, как Blob создан, загружаем его
    let link = document.createElement('a');
    link.download = 'example.png';

    link.href = URL.createObjectURL(blob);
    link.click();

    // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
    URL.revokeObjectURL(link.href);
}, 'image/png');


*/
let url = "https://edamam-product-images.s3.amazonaws.com/web-img/77f/77f41b1a49262ce0bc56c9d30ebb1665.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLWVhc3QtMSJHMEUCIQDdyCsK%2F8cFMB0uMHM9t423dPtkH9fr53n3meiMhinuJgIgAVWdA%2F6wIpNMoejwINYJxEGK%2BgWe4UxFVlkZhKbq%2FXUqgwQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDP5Q%2FcN7%2F2VyeqSRMirXA7lo8ddVuYxD3aZ8wyFqhE04iVKg%2BQP%2Fk3QYH1SNzv4dyvyx0HPkQmPxVTiuY927sXLgIfkVCYqExlZ%2FrcPUtgLz%2F2baNv1P4W90jbrR2MutrCV447ZChLGiQkYL%2FvGgUBqJhabMXfbkEg8w4OYGbiAS%2BaSJxAsZYcE%2BS5PfgPHgIZtQAZvHWMd9Q%2BlY7UyM30yg8%2FRb%2BktZ8u7wSbOzZSoM84HljaS2XwKwI6fqVY8rp3JVTnwl%2FtVOHzj8mRI1dANQ%2FALtrZ%2BnDBdhoIQvnsVwXXr5GCfUrx3xtC6cQ8XTtDwa3yMJPrRdWMZ7%2BIcuErPIqbmQbZK6Ym5zzEFKU3WRwSJdbYu9IJ4VMVNxEjYimDkV70Al0YtLZz4e4r3zZKThWQfqMfDHBlsmXj6cPdzv7Tj%2F8JdqygtP3VGEz7Itx5Yw%2F8oQJr48IdYkxfMOYpCfpv8iF8q1sDElnUphp3FJ3g0q83zyBXUx9ahI36JpgeBLlKn5DL%2F1AZ7k%2BS0f75fQLyOqrfDmSFXL6jqlJ08o6uzzV45eQHehtzm5TS02nIL7M998dkc5YW4D%2FTaIYdpCPPcGg6jUpTpwiYmGdYYfBR%2FEVfayV0AfffhkVL4Ac3RRSvNtgzDr%2BvKSBjqlAciCTdY%2FVNjgTIHhshumqrvm6laE%2FQ1nLdzGjk1mxGzVukG4BGC7Zf%2FUKif1p2Y3G1nWOVQeb9%2BsQG2K%2BGTXimIm0RhUV60KYOGqBcHK8C5TZpKwziCP%2BixN0x9lpZUOOkmMwCMYpiQ7S025WUGT88mtZZDaG46h1Ju%2FMFo11aqh%2FhkFnH16ssuyblV%2FJZbXepXXFqdzfA%2Fw0evyMUGhheK%2BLJiGtw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220418T015111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFG7USP4UO%2F20220418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ad5d0e00047504e8cd07e9d8bedfce816cac114087f055319933cdfe76bce96"
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

                    document.querySelector("#work").innerHTML = `
                    <a download="image1.jpg" href="${result}">Download</a>
                    `
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


//getURLBase64(url);
//console.log()
//console.log(getURLBase64(url).then)
let test
getURLBase64(url).then(value => console.log(value), console.log("hey"), console.log("bro" + value));
//console.log(test)
