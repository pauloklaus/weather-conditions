function HourFormatter(context) {
  if (typeof context.getHours !== "function") {
    return "";
  }

  const hours = `${context.getHours() % 12}`.padStart(2, "0");
  const mins = `${context.getMinutes()}`.padStart(2, "0");
  const secs = `${context.getSeconds()}`.padStart(2, "0");
  const period = context.getHours() < 12 ? "AM" : "PM";

  return `${hours}:${mins}:${secs} ${period}`;
}

export default HourFormatter;
