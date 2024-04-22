//Variables
const darkLightSwitch = document.querySelector('#modeSwitch');
const container = document.querySelector('.container');

let mode = 'dark'

//Functions
darkLightSwitch.addEventListener('click', function ()
{
    if(mode === "dark")
    {
        mode = 'light'
        container.setAttribute('class', 'light');
    } else
    {
        mode = 'dark'
        container.setAttribute('class', 'dark');
    }
})