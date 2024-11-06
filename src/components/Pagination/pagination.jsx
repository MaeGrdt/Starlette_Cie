import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import "./style.css";

export default function PaginationShop({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const renderItem = ({ ref, key, value, onNext, onPrevious, className }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          onClick={onNext}
          disabled={currentPage === totalPages}
        ></button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          onClick={onPrevious}
          disabled={currentPage === 1}
        ></button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          currentPage === value ? "bg-danger-200 text-white" : ""
        )}
        onClick={() => {
          console.log(`Page ${value} clicked`);
          onPageChange(value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={totalPages}
      initialPage={currentPage}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="bordered"
    />
  );
}
