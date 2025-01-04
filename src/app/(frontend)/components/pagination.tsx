import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface HalamanProps {
  currentPage: number;
  totalPages: number;
}

export function Halaman({ currentPage, totalPages }: HalamanProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        {/* Render Previous button only if not on the first page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {/* Render page numbers */}
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink 
              href={`?page=${number}`} 
              isActive={currentPage === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Render Next button only if not on the last page */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
