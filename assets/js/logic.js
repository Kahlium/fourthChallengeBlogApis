//Variables
const darkLightSwitch = document.getElementById('modeSwitch');
const container = document.querySelector('.container');

let mode = 'dark' //Set as local storage value

//Functions
darkLightSwitch.addEventListener('click', function ()
{
    if(mode === 'light')
    {
        mode = 'dark'
        container.setAttribute('class', 'dark');
        localStorage.setItem('mode', JSON.stringify(mode))
    } else
    {
        mode = 'light'
        container.setAttribute('class', 'light');
        localStorage.setItem('mode', JSON.stringify(mode))
    }
})