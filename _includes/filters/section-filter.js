export default function (content, sectionName) {
  if (!content || typeof content !== "string") {
    return content;
  }

  if (typeof sectionName !== "string" || !sectionName) {
    return "";
  }

  // Normalize section name for comparison (trim whitespace)
  const targetName = sectionName.trim().toLowerCase();

  // Regex to match section markers with content up to the next section or end of string
  // Captures: (1) section names, (2) content until next section marker or end
  const sectionRegex = /<!--section:([^>]+)-->([\s\S]*?)(?=<!--section|$)/g;

  let results = [];
  let match;

  // Find all sections
  while ((match = sectionRegex.exec(content)) !== null) {
    const namesStr = match[1];
    const sectionContent = match[2];
    const names = namesStr.split(",").map((n) => n.trim().toLowerCase());

    // Check if any of the names match the target
    if (names.includes(targetName)) {
      results.push(sectionContent);
    }
  }

  // Join all matching sections
  return results.join("");
}