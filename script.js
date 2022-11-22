// define the url to use
const requestURL = 'https://icanhazdadjoke.com/'

// make sure the js doesn't start until the document loads
document.addEventListener('DOMContentLoaded', () => {
  // request data from the chosen API
  fetch(requestURL, {
    // set the header for the data type we want to query from the API
    headers: {
      'Accept': 'application/json'
    }}) // <--- This broke before realizing I needed 2 } intead of 1 here
    // parse the returned value into a json object we can interact with
  .then((responseData) => responseData.json())
  // interact with the parsed json
  .then((peopleData) => {
    console.log(peopleData)
    // define the html element to change
    const joke = document.querySelector('#joke')
    // set the inner text of the HTML element to the portion of the API response that we select
    joke.innerText = peopleData.joke
})
})