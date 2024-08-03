export function extractTime(dateString) {
    const date = new Date(dateString)
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}