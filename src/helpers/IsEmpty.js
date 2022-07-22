function isEmpty(context) {
  return context === undefined || context === null || `${context}`.trim() === "";
}

export default isEmpty;
