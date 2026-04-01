export function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatISODate(date: string) {
  return formatMonthYear(date);
}
