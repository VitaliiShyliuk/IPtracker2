// initialization app
// document.addEventListener('DOMContentLoaded', )
// variables
const myButton = document.querySelector('.search-bar__button');
const myInput = document.querySelector('.search-bar__input-value');
// eventListeners
myButton.addEventListener('click', handleClick);
myInput.addEventListener('keydown', handleKey);
// functions
function handleKey(e) {
    if (e.key === 'Enter') handleClick();
}
function handleClick() {
    const ip = myInput.value;
    myInput.value = '';
    if (ValidateIPaddress(ip)) getData();
}
function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) return true;
    alert("You have entered an invalid IP address!");
    return false;
}
// async
async function getData() {
    const responce = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_ujcK3gexcZBYuhq49GjnjO9n9gZYJ&ipAddress=${myInput.value}`);
    const data = await responce.json();
    console.log(data);
}

//# sourceMappingURL=index.579125c3.js.map
