//* selecting dom items
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".searchButton");
const imageResults = document.querySelector(".imageResults");

//* search function
searchButton.addEventListener("click", function (event) {
  let input = searchInput.value;
  fetch(`https://api.unsplash.com/search/photos?query=${input}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID C1MFsF3QQU5jJ95wPF-BOfGJf4g_sBkxgpKBOwby8uY",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Array.from(data.results).forEach((element) => {
        displayImage(element.urls.regular, element.alt_description);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  event.preventDefault();
});

//* display img function
function displayImage(imageUrl, altDescp) {
  /* 
     <div class='imageResults'>
       <div class='imageResult'>
             <img src='' alt='' />
        </div>
     </div>
*/
  const imageDiv = document.createElement("div");
  imageDiv.className = "imageResult";

  const img = document.createElement("img");
  img.setAttribute("src", imageUrl);
  img.setAttribute("alt", altDescp);

  imageResults.appendChild(imageDiv);
  imageDiv.appendChild(img);
}

displayImage();
