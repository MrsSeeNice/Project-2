document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    const apiKey = 'vZgfW0vjYSFqqEH2BX01rqExIjHi5buQ' ;  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = 'R7FMzJWUKB51dnNFSgOEo2FxyJ0yKvs8';  
            data.data.forEach(gif => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                resultsDiv.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
