function validateTimelineData(data) {
  if (!Array.isArray(data)) {
    throw new Error('Data must be an array');
  }

  for (let item of data) {
    if (typeof item.year !== 'number' || typeof item.event !== 'string') {
      console.error('Invalid item format:', item);
      return false;
    }
  }

  return true;
}
