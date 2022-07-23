function capitalizeAllWords(context) {
  return `${context}`.trim().toLowerCase().split(" ").map(
    word => `${word[0].toUpperCase()}${word.substring(1)}`
  ).join(" ");
}

export default capitalizeAllWords;
