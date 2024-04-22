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

        div.innerHTML = `<h2>Title: ${post.title}</h2> <p>Content: ${post.blogContent}</p> <p> Author: ${post.username}</p>`

        blogPostList.appendChild(div);
    }
}

renderPosts();