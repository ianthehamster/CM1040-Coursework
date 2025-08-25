async function loadTimeline(jsonFile) {
  try {
    const res = await fetch(`data/${jsonFile}`);

    if (!res.ok) throw new Error('Failed to load timeline data');

    const data = await res.json();

    const bar = document.getElementById('timeline-bar');
    const imgBox = document.getElementById('timeline-image');
    const eventBox = document.getElementById('timeline-event');

    bar.innerHTML = '';
    imgBox.innerHTML = '';
    eventBox.innerHTML = 'Click a year above to see details';

    data.forEach((item) => {
      const btn = document.createElement('div');
      btn.className = 'timeline-year';
      btn.textContent = item.year;

      btn.addEventListener('click', () => {
        eventBox.textContent = item.event;

        imgBox.innerHTML = `<img src="${item.image}" alt="Event ${item.year}">`;
      });

      bar.appendChild(btn);
    });
  } catch (error) {
    console.error(err);
    document.getElementById('timeline-event').textContent =
      'Error loading timeline';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('timeline-bar')) {
    loadTimeline('dialup.json');
  }
});
