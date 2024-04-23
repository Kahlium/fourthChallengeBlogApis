//Variables
const darkLightSwitch = document.getElementById('modeSwitch');
const container = document.querySelector('.container');

let mode = JSON.parse(localStorage.getItem('mode'));
keepTheme()

//Functions
function keepTheme()
{
    if(mode === 'dark')
    {
        container.setAttribute('class', 'dark');
        darkLightSwitch.setAttribute('style', "color: black; background-color: white")
        localStorage.setItem('mode', JSON.stringify(mode))
    
    } else
    {
        container.setAttribute('class', 'light');
        darkLightSwitch.setAttribute('style', "color: white; background-color: black")
        localStorage.setItem('mode', JSON.stringify(mode))
    }
}

darkLightSwitch.addEventListener('click', function ()
{
    if(mode === 'light')
    {
        mode = 'dark'
        keepTheme()
    
    } else
    {
        mode = 'light'
        keepTheme()
    }
})