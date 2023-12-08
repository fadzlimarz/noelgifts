// categoryMapping.ts
const categoryIdsToTitles: Record<number, string> = {
  1: "Lizhan",
  2: "Fadzli",
};

export function getCategoryTitle(categoryId: number): string {
  return categoryIdsToTitles[categoryId] || "Unknown";
}
