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

function renderPosts()
{
    for (let i = 0; i < currentPosts.length; i++)
    {
        const post = currentPosts[i]

        const div = document.createElement('div');
        div.classList.add('postContainer')

        div.innerHTML = `<h2>${post.title}</h2> <p>${post.blogContent}</p> <h3> Author: ${post.username}</h3>`

        blogPostList.appendChild(div);
    }
}

renderPosts();