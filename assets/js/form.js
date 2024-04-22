//Variables
const username = document.getElementById('username');
const title = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitButton = document.getElementById('submit');

//Functions
submitButton.addEventListener('click', function (event)
{
    event.preventDefault()

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
        localStorage.setItem('blogPost', JSON.stringify(blogPost))
        console.log(blogPost)        
    };
})