// define the url to use
const requestURL = 'https://icanhazdadjoke.com/'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#button')
  button.addEventListener('click', (e) => {
    fetch(requestURL, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((responseData) => responseData.json())
      .then((peopleData) => {
        const joke = document.querySelector('#joke')
        joke.innerHTML = '<img src="https://icanhazdadjoke.com/j/' + peopleData.id + '.png" />'
      })
  })
})