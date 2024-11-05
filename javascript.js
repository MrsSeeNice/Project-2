document.getElementById('search-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    const apiKey = 'YOUR_GIPHY_API_KEY';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=12`;

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
});
