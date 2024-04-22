//Variables
const backButton = document.getElementById('back')
const blogPostList = document.getElementById('blogPosts')
let currentPosts = JSON.parse(localStorage.getItem('blogPost') || "[]");

//Functions
backButton.addEventListener('click', function (event)
{
    event.preventDefault()
    window.location.href = "index.html"
})