console.log("Let's get this party started!");
const BASE_URL = 'http://api.giphy.com/v1/gifs'
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

const $giphyForm = document.querySelector('#Giphy')
const $giphyInput = document.querySelector('#Giphy-search')

/** Sets Event Listener for form submission */
function start() {
  $giphyForm.addEventListener('submit', handleSubmission)
}

/** Gets a gif and appends to DOM */
async function handleSubmission(evt) {

  const gif = await getGif();
  // Append to dom
}

/** Makes AJAX call to Giphy api to get gif data
 *    - Return String of the gif url
 */
async function getGif() {
  const search = $giphyInput.value;

  const resp = await fetch(
    `${BASE_URL}/search`,
    {

    }
  )

}
export { start }