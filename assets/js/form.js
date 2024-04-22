//Variables
const username = document.getElementById('username');
const title = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event)
{
    event.preventDefault();
    const blogPost = 
    {
        username: username.value,
        title: title.value,
        blogContent: blogContent.value
    }

    localStorage.setItem('blogPost', JSON.stringify(blogPost))
    console.log(blogPost)
})