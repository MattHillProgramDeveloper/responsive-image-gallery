
//public access key for unsplash
const pubKey = "b1932e62b44bf6eeec26b0234b0d535518f6a9c6b8aa2458833812514bc01439";


function runXHR(){
        // Create an AJAX or Fetch request that writes
        // data to the #results section
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.unsplash.com/search/photos?client_id=b1932e62b44bf6eeec26b0234b0d535518f6a9c6b8aa2458833812514bc01439&page=1&per_page=9&query=cat', true);
        xhr.send(null);
        //onload  fires once the server has responded to the request
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log("we see the server");
                let responseObject = JSON.parse(xhr.responseText);
                console.log(responseObject);
                if (responseObject.total === 0) {
                    alert("Something is wrong!<br>The database found no kitties! :(")
                }
                else {
                    displayKitties(responseObject.results);
                }


            }
        };

        

    }

function displayKitties(kittyArray){
    //loop through the list of kitties making a figure for each one
        let catGrid = "";
        let wrapper = document.querySelector('main');
    for (let i = 0; i < kittyArray.length; i++){

        let imageURL = kittyArray[i].urls.small;
        let imageLikes = kittyArray[i].likes;
        let photographer = kittyArray[i].user.name;
        let photographerPage = kittyArray[i].user.links.html;
        let description = kittyArray[i].description

        catGrid += '<article class="item">';
        catGrid += '<img src=' + imageURL + ' alt="Image of ' + description + '"/>';
        catGrid += '<div class="slideinfo">'
        catGrid += '<p class="photographer"><a href="'+photographerPage+'">'+photographer+'</a></p>';
        catGrid += '<p class="likes">Likes:'+imageLikes+'</p>';
        catGrid += "</div></article>"
    }
    wrapper.innerHTML=catGrid;
}


runXHR();

console.log("index.js loaded")