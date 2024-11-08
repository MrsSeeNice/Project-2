const apiKey = 'guehPRthhLSMNjGMiD7N1Tuqu3fs7Je7';
const resultsSection = document.getElementById('results');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Function to display GIFs
function displayGifs(gifs) {
    resultsSection.innerHTML = '';
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.classList.add('gif');
        resultsSection.appendChild(img);
    });
}
// Function to fetch trending GIFs
async function fetchTrendingGifs() {
  try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`);
      const data = await response.json();
      displayGifs(data.data);
  } catch (error) {
      console.error("Error fetching trending GIFs:", error);
      resultsSection.innerHTML = `<p>Failed to load trending GIFs. Please try again later.</p>`;
  }
}
// Function to fetch search GIFs
async function fetchSearchGifs(query) {
  try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`);
      const data = await response.json();
      displayGifs(data.data);
  } catch (error) {
      console.error("Error fetching search GIFs:", error);
      resultsSection.innerHTML = `<p>Failed to load search results. Please try again later.</p>`;
  }
}

// Event listener for form submission
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
      fetchSearchGifs(query);
  }
});

// Load trending GIFs on page load
window.addEventListener('DOMContentLoaded', fetchTrendingGifs);