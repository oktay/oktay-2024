"use client";

import { usePathname } from "next/navigation";

import { usePagination } from "@/lib/hooks";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function BookmarkPagination({
  count,
  currentPage,
  ...props
}: {
  count: number;
  currentPage: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const { pageNumbers, totalPages } = usePagination(count, currentPage);
  const pathanme = usePathname();

  function createPageLink(page: string | number) {
    return `${pathanme}?p=${page}`;
  }

  return (
    <Pagination {...props}>
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationPrevious href={createPageLink(currentPage - 1)} />
        )}

        {pageNumbers.map((page, index) => {
          if (page === "ellipsisLeft" || page === "ellipsisRight") {
            return <PaginationEllipsis key={index} />;
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageLink(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage !== totalPages && (
          <PaginationNext href={createPageLink(currentPage + 1)} />
        )}
      </PaginationContent>
    </Pagination>
  );
}
