// Function to update the time dynamically
function updateClock() {
  const now = new Date(); // Gets current date and time [20]
  const timeString = now.toLocaleTimeString();
  
  // Manipulating the Document Object Model (DOM) [19]
  document.getElementById('time-display').innerText = `Current Time: ${timeString}`;
}
 // search bar function //
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the page from refreshing
  const query = searchInput.value;
  if (query) {
    // Redirects the current tab to a Google search
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

// Update the clock every second [21]
setInterval(updateClock, 1000);
updateClock();