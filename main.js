const { app } = require('@azure/functions');

var favoritePlaces = [
    { content: 'Palos Hills, IL', coordinates: { lat: 41.702229, lng: -87.817200 } },
    { content: 'Rome, Italy', coordinates: { lat: 41.902782, lng: 12.496365 } },
    { content: 'London, UK', coordinates: { lat: 51.507351, lng: -0.127758 } },
    { content: 'Tokyo, Japan', coordinates: { lat: 35.689487, lng: 139.691711 } },
    { content: 'Dallas, Texas', coordinates: { lat: 32.7762719, lng: -96.7968559 } },
    { content: 'Paris, France', coordinates: { lat: 48.856614, lng: 2.352221 } },
    { content: 'Venice, Italy', coordinates: { lat: 45.4371908, lng: 12.3345898 } },
    { content: 'Sydney, Australia', coordinates: { lat: -33.865143, lng: 151.209900 } },
];

app.http('favoritePlaces', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = {
            body: JSON.stringify(favoritePlaces)
        };

        // Set CORS headers to allow requests from any origin
        response.headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        };

        return response;
    }
});

// Use the Fetch API to get JSON data from the Azure Function
fetch('/api/favoritePlaces')
  .then(response => response.json())
  .then(data => {
    // Handle the JSON data received from the Azure Function
    console.log(data); // Do something with the data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });