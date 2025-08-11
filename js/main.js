async function loadTimeline(jsonFile, templateFile, targetId) {
  try {
    // Fetches the data from the data folder and the template from the templates folder
    const [jsonRes, templateRes] = await Promise.all([
      fetch(`/data/${jsonFile}`),
      fetch(`/templates/${templateFile}`),
    ]);

    // Check if the jsonFile and templateFile were actually in the data and template folders
    if (!jsonRes.ok || !templateRes.ok) {
      throw new Error('Failed to fetch data or template');
    }

    const data = await jsonRes.json(); // Parse the JSON data
    const template = await templateRes.text(); // Get the template text

    // Validate the data format using the validateTimelineData function
    if (!validateTimelineData(data)) {
      document.getElementById(targetId).innerHTML =
        '<p>Invalid data format</p>';
      return;
    }

    // Render the template with the data using Mustache and pass in the data as an object to the events variable in the Mustache template
    const rendered = Mustache.render(template, { events: data });

    // Insert the rendered HTML into the target element
    document.getElementById(targetId).innerHTML = rendered;
  } catch {
    console.error('Error loading timeline:', error);
    document.getElementById(targetId).innerHTML =
      '<p>Error loading timeline</p>';
  }
}

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('dialup-timeline')) {
    loadTimeline('dialup.json', 'timeline.mustache', 'dialup-timeline');
  }
  if (document.getElementById('broadband-timeline')) {
    loadTimeline('broadband.json', 'timeline.mustache', 'broadband-timeline');
  }
  if (document.getElementById('mobile-timeline')) {
    loadTimeline('mobile.json', 'timeline.mustache', 'mobile-timeline');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelector('.menu-links');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      menuLinks.classList.toggle('show');
    });
  }
});
