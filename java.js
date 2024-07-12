// Function to save API key to localStorage
function saveApiKey(apiKey) {
    localStorage.setItem('apiKey', apiKey);
    alert('API Key saved successfully!');
}

// Function to get API key from localStorage
function getApiKey() {
    return localStorage.getItem('apiKey');
}

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = getApiKey(); // Get API key from localStorage

    if (!apiKey) {
        alert('Please enter and save your API key first.');
        return;
    }

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
            document.getElementById('weatherResults').textContent = 'Failed 
