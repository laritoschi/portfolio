export function removeHtmlWhitespace(str) {
  return str.trim().replace(/>\s+</g, "><");
}