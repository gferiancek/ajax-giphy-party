console.log("Let's get this party started!");
const BASE_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

const $giphyForm = document.querySelector('#Giphy');
const $giphyInput = document.querySelector('#Giphy-search');
const $gifArea = document.querySelector('#Gifs');
const $gifRemoveButton = document.querySelector("#Giphy-remove-button");

/** Sets Event Listeners for form submission */
function start() {
  $giphyForm.addEventListener('submit', handleSubmission); //Gavin use double ""

  $gifRemoveButton.addEventListener("click", removeGifs);
}

/** Gets a gif and appends to DOM */
async function handleSubmission(evt) {
  evt.preventDefault();

  const url = await getGifUrl();
  showGif(url);
}

/** Makes AJAX call to Giphy api to get gif data
 *    - Return String of the gif url
 */
async function getGifUrl() {
  const search = $giphyInput.value; //FIXME: searchTerm

  const params = new URLSearchParams({ q: search, api_key: API_KEY });

  const resp = await fetch(`${BASE_URL}/search/?${params}`);
  const gifs = await resp.json(); //FIXME: gifsData

  const amtOfGifs = gifs.data.length;
  const randomIndex = Math.floor(Math.random() * (amtOfGifs)); //FIXME: decompos // Might be nice to have this as an array of gifs

  const gifsUrl = gifs.data[randomIndex].images.downsized_medium.url; //FIXME: gifUrl

  return gifsUrl;
}
//TODO: This can be broken down fetching the api data AND formatting the data

/** Display gif to DOM using url
 *    - url: String of gif url
 */
function showGif(url) {
  console.log('showGifs', { url });

  const $img = document.createElement('img');
  $img.src = url;

  $gifArea.append($img);
}

/**
 * Remove all gifs from gif area
 */
function removeGifs(evt) {
  evt.preventDefault();

  $gifArea.innerHTML = "";
}

export { start };