export default function FormatDuration(time) {
  const timeArr = time.split(":");
  const hours = parseInt(timeArr[0]);
  const minutes = parseInt(timeArr[1]);
  const seconds = parseInt(timeArr[2]);

  if (hours > 0) {
    if (minutes > 0 || seconds > 0) {
      return `${hours} giờ ${minutes + 1} phút`;
    } else {
      return `${hours} giờ`;
    }
  } else {
    return `${minutes + 1} phút`;
  }
}
