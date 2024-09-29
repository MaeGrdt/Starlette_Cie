import { Pagination, PaginationItemType, cn } from "@nextui-org/react";
import './style.css';

export default function PaginationShop() {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return <button key={key} onClick={onNext} hidden></button>;
    }

    if (value === PaginationItemType.PREV) {
      return <button key={key} onClick={onPrevious} hidden></button>;
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(className, isActive && "bg-danger-200 text-white")}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={3}
      initialPage={1}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="bordered"
    />
  );
}
