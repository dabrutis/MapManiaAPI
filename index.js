module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Your JSON data
    const favoritePlaces = [
        { "content": "Palos Hills, IL", "coordinates": { "lat": 41.702229, "lng": -87.817200 } },
        { "content": "Rome, Italy", "coordinates": { "lat": 41.902782, "lng": 12.496365 } },
        { "content": "London, UK", "coordinates": { "lat": 51.507351, "lng": -0.127758 } },
        { "content": "Tokyo, Japan", "coordinates": { "lat": 35.689487, "lng": 139.691711 } },
        { "content": "Dallas, Texas", "coordinates": { "lat": 32.7762719, "lng": -96.7968559 } },
        { "content": "Paris, France", "coordinates": { "lat": 48.856614, "lng": 2.352221 } },
        { "content": "Venice, Italy", "coordinates": { "lat": 45.4371908, "lng": 12.3345898 } },
        { "content": "Sydney, Australia", "coordinates": { "lat": -33.865143, "lng": 151.209900 } }
    ];

    context.res = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify(favoritePlaces)
    };
};