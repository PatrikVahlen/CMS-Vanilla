// const url = "https://mock-data-api.firebaseio.com/webb21/products.json"; //Vår API
const url =
  "https://public-api.wordpress.com/rest/v1.1/sites/webb21vahlen.wordpress.com/posts";
const articleListElement = document.getElementById("articleList"); //Identifierar vår div i DOM:en som det ska appendas till

function renderArticleItem(articleItem, rating) {
  //renderar våra object
  console.log(rating);
  const articleItemElement = document.createElement("div");

  const titleElement = document.createElement("h3"); //Skapa en H2
  titleElement.innerText = articleItem.title; //Hämtar name och sätter titel till vår H2

  const imageElement = document.createElement("img");
  imageElement.src = articleItem.featured_image;

  articleItemElement.append(titleElement); //appendar titeln till vår div
  articleItemElement.append(imageElement);

  articleListElement.append(articleItemElement); //Appendar vår div till diven i DOM:en
}

function renderArticleList(articleList) {
  articleList.forEach((articleItem) => {
    //tar emot array och skickar vardera object till ny funktion
    renderArticleItem(articleItem);
  });
}

fetch(url) //Hämta vårt API/URL
  .then((response) => response.json())
  .then((data) => {
    renderArticleList(data.posts); //Skicka array med object
    console.log("HÄR");
    console.log(data);
  });
