import { PAGE_SIZE } from "@/lib/constants";

export const usePagination = (count: number, currentPage: number) => {
  const totalPages = Math.ceil(count / PAGE_SIZE);
  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  if (currentPage - 1 <= 2) {
    endPage = Math.min(5, totalPages);
  }
  if (totalPages - currentPage <= 2) {
    startPage = Math.max(1, totalPages - 4);
  }

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) {
      pageNumbers.push("ellipsisLeft");
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsisRight");
    }
    pageNumbers.push(totalPages);
  }

  return {
    totalPages,
    pageNumbers,
  };
};
