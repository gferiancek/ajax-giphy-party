console.log("Let's get this party started!");
const BASE_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

const $giphyForm = document.querySelector('#Giphy');
const $giphyInput = document.querySelector('#Giphy-search');

/** Sets Event Listener for form submission */
function start() {
  $giphyForm.addEventListener('submit', handleSubmission);
}

/** Gets a gif and appends to DOM */
async function handleSubmission(evt) {
  evt.preventDefault();

  const gif = await getGifUrl();
  // Append to dom
}

/** Makes AJAX call to Giphy api to get gif data
 *    - Return String of the gif url
 */
async function getGifUrl() {
  const search = $giphyInput.value;

  const params = new URLSearchParams({ q: search, api_key: API_KEY });

  const resp = await fetch(
    `${BASE_URL}/search/?${params}`
  );
  const gifs = await resp.json();

  const amtOfGifs = gifs.data.length;

  const randomIndex = Math.floor(Math.random() * (amtOfGifs + 1));

  console.log("gif's url:", {data: gifs.data[8].embed_url});
  const gifsUrl = gifs.data[randomIndex].embed_url;

  return gifsUrl;
}
export { start };