//Variables
const backButton = document.getElementById('back')


//Functions
backButton.addEventListener('click', function (event)
{
    event.preventDefault()
    window.location.href = "index.html"
})