async function fetchThanksgivingGifs() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const query = 'thanksgiving';
    const limit = 12;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = gif.title;
            resultsContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
