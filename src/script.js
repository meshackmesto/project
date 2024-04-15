document.querySelector("form").addEventListener("submit",(e) =>{
  e.preventDefault();
  })

const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-Author");
  const memeContainer = document.querySelector(".meme-generator");
  const addMemeBtn = document.getElementById("add-meme-btn");
  const memeUrl = document.getElementById("meme-url");
  const memeTitleElement = document.querySelector(".meme-title");
  const memeAuthorElement = document.querySelector(".meme-author");


//Function adding meme amd meme button 
addMemeBtn.addEventListener("click", () => {
  e.preventDefault();
  const url = memeUrl.value;
  const title = memeTitle.value;
  const author = memeAuthor.value;

  if (url && title && author) {
    updateMeme(url, title, author);
    memeUrl.value = "";
    memeTitle.value = "";
    memeAuthor.value = "";
  } else {
    alert("Please enter a URL, title, and author for the meme.");
  }
});

const updateMeme = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitleElement.textContent = title;
  memeAuthorElement.textContent = `Meme by: ${author}`;
};

  const updateDetails = (url, title, Author) => {
    memeImage.setAttribute("src", url);
    memeTitle.textContent = title;
    memeAuthor.textContent = `Meme by: ${Author}`;
  };
  //fetching from the api  the memes
  const generateMeme = () => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.name);
      });
      generateMemeBtn.addEventListener("click", generateMeme);
  };
  generateMeme();
 
  //Function for deleting memes
  const deleteMeme = (e) => {
    e.target.parentNode.removeChild(e.target.parentNode);
  };

  
  // Add event listener for deleting meme
  memeContainer.addEventListener("click", deleteMeme);
//Function for liking memes
  const likeBtn = document.querySelector(".like-btn");
  let likes = 0;
  //Add eventlistener for liking a meme
  likeBtn.addEventListener("click", () => {
    likes++;
    likeBtn.textContent = `Likes: ${likes}`;
  });
  let AuthorLikes = {};

  const updateBoardDetails = (url, title, Author) => {
    memeImage.setAttribute("src", url);
    memeTitle.textContent = title;
    memeAuthor.textContent = `Meme By: ${Author}`;
  
    // Increment the like count for the author
    if (AuthorLikes[Author]) {
        AuthorLikes[Author]++;
    } else {
        AuthorLikes[Author] = 1;
    }
  };