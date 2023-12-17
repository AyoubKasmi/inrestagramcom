const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
  
    // Get date components
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Create formatted date string
    const formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}`;
  
    return formattedDate;
}

function formatTimestampWithMonthAndSeconds(timestamp) {
    const date = new Date(timestamp);
  
    // Get date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.getMonth() + 1; // Adding 1 because months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Create formatted date string
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
  
    return formattedDate;
}

function formatVideoDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
  
    // Ensure seconds are represented with two digits
    const formattedSeconds = seconds.toFixed(2);
  
    // Create formatted duration string
    const formattedDuration = `${hours > 0 ? `${hours} h` : ''} ${minutes > 0 ? `${minutes} min` : ''} ${formattedSeconds}s`;
  
    return formattedDuration.trim();
}
  
  
  

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
};

const formatNumberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export {
    formatTimestamp,
    formatTimestampWithMonthAndSeconds,
    formatVideoDuration,
    truncateText,
    formatNumberWithSpaces
}
  