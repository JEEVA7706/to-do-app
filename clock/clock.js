function updateClock() {
  const now = new Date();

  // Format time: HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Format date: May 23, 2025 (Friday)
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const dateString = now.toLocaleDateString('en-US', options);

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Initial call and interval
updateClock();
setInterval(updateClock, 1000);
