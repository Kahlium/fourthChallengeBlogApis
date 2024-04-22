//Variables
const username = document.getElementById('username');
const title = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitButton = document.getElementById('submit');

//Functions
submitButton.addEventListener('click', function (event)
{
    event.preventDefault()
    let currentPosts = JSON.parse(localStorage.getItem('blogPost') || "[]");
    const blogPost = 
    {
        username: username.value,
        title: title.value,
        blogContent: blogContent.value
    };

    if (username.value === "" || title.value === "" || blogContent.value === "")
    {
        window.alert("Please fill out all areas to submit your blog post");
    } else
    {
        currentPosts.push(blogPost)
        localStorage.setItem('blogPost', JSON.stringify(currentPosts))
        window.location.href = "blog.html"        
    };
    
})