import { PAGE_SIZE } from "./constants";

export const usePagination = (count: number, currentPage: number) => {
  const totalPages = Math.ceil(count / PAGE_SIZE);
  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Adjust start and end pages if near the start or end
  if (currentPage - 1 <= 2) {
    endPage = Math.min(5, totalPages);
  }
  if (totalPages - currentPage <= 2) {
    startPage = Math.max(1, totalPages - 4);
  }

  // Always include the first page if not already included
  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) {
      pageNumbers.push("ellipsisLeft"); // Placeholder for left ellipsis
    }
  }

  // Include the current, previous, and next pages
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Always include the last page if not already included
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsisRight"); // Placeholder for right ellipsis
    }
    pageNumbers.push(totalPages);
  }

  return {
    totalPages,
    pageNumbers,
  };
};
