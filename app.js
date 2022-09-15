const url =
  "https://public-api.wordpress.com/rest/v1.1/sites/webb21vahlen.wordpress.com/posts"; //Our API from wordpress.com where we update our Blog-posts
const articleListElement = document.getElementById("articleList"); //Identify where our DIV where we will append to

function renderArticleItem(articleItem, rating) {
  //renderar våra object
  const articleItemElement = document.createElement("div");

  const titleElement = document.createElement("h3"); //Create a H3
  titleElement.innerText = articleItem.title; //Get the title Blog-title from our JSON

  const imageElement = document.createElement("div"); //Create a div element
  imageElement.innerHTML = articleItem.content; //Set the innerHTML from the BLOG-posts
  console.log(articleItem.content);

  articleItemElement.append(titleElement); //Appends our title to the first DIV
  articleItemElement.append(imageElement); //Appends our imageElement to our DIV

  articleListElement.append(articleItemElement); //Appends the whole DIV to our DOM
}

function renderArticleList(articleList) {
  //Receives an array and sends each object in the array renderArticleItem where they will be rendered
  articleList.forEach((articleItem) => {
    renderArticleItem(articleItem);
    console.log(articleItem);
  });
}

fetch(url) //Fetches our API/URL
  .then((response) => response.json())
  .then((data) => {
    renderArticleList(data.posts);
  });
