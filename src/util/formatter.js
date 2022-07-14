export function replaceAllWhitespaceWithSingleSpace(text) {
  return text.replace(/\n|\r/g, " ").replace(/ {2,}/g, " ");
}
