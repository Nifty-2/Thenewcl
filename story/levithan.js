// ✅ List of valid fashion/beauty keywords
export const fashionKeywords = [
  "dress", "shirt", "makeup", "lipstick", "heels", "skirt",
  "blouse", "foundation", "mascara", "perfume", "scarf",
  "jewelry", "nail", "boots", "gown"
];

// ✅ Function to calculate Levenshtein distance
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

// ✅ Find closest keyword for typo correction
function findClosestKeyword(term) {
  let bestMatch = null;
  let minDist = Infinity;

  for (let keyword of fashionKeywords) {
    const dist = levenshtein(term.toLowerCase(), keyword.toLowerCase());
    if (dist < minDist && dist <= 2) {  // You can adjust threshold
      minDist = dist;
      bestMatch = keyword;
    }
  }

  return bestMatch;
}

// ✅ Check if any fashion keyword exists in the input (even with a color prefix)
export function parseSearchTerm(rawTerm) {
  const words = rawTerm.toLowerCase().split(' ');
  for (let word of words) {
    if (fashionKeywords.includes(word)) {
      return { corrected: word, message: null };
    }
    const close = findClosestKeyword(word);
    if (close) {
      return {
        corrected: close,
        message: `Did you mean "${close}"?`
      };
    }
  }

  return { corrected: null, message: null };
}

// ✅ Return dummy products for a search term
export function getDummyResults(term, count = 10) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1} for ${term}`
  }));
}