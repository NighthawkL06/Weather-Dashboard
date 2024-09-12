// Function to save API key to localStorage
function saveApiKey(apiKey) {
    localStorage.setItem('apiKey', apiKey);
    alert('API Key saved successfully!');
}

// Function to get API key from localStorage
function getApiKey() {
    return localStorage.getItem('apiKey');
}
var storedCities = ["city", "city2", "city3"]


function searchApi(whatCity){
    //there is an api that lets you search by city directly.
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the data here (display forecast, etc.)
            console.log(data); // For demonstration, you can display in console or update HTML
            document.getElementById('weatherResults').innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('weatherResults').textContent = 'Failed'; 
        })
}

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = getApiKey(); // Get API key from localStorage

    if (!apiKey) {
        alert('5540d10244e06fa52c6949182fc7db5a');
        return;
    }

   
})


//a bunch of pseudocode with no function
// a form with a city input
// how do we make a form work? -> add Event Listeners

// we need to recognize user inputs -> id
// string => inputValue == city;
//what do you wnat to do with this city?
// searchApi(city)
// saveToStorage(city)