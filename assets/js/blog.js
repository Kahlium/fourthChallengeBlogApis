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

        const li = document.createElement('li');
        li.textContent = post.title;

        blogPostList.appendChild(li);
    }
}

renderPosts();