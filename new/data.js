export const fashionKeywords = [
  "dress", "shirt", "makeup", "lipstick", "heels", "skirt", "blouse", "foundation",
  "mascara", "perfume", "scarf", "jewelry", "nail", "boots", "gown"
];

export function isFashionKeyword(term) {
  return fashionKeywords.some(keyword =>
    term.toLowerCase().includes(keyword)
  );
}

export function getDummyResults(term, count = 10) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1} for ${term}`
  }));
}