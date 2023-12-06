import { usePagination, DOTS } from '../../hooks/usePagination';
const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={('border-slate-950 join', { [className]: className })}>
      <li
        className={
          ('flex join-item',
          {
            disabled: currentPage === 1,
          })
        }
        onClick={onPrevious}
      >
        <button className="join-item btn">«</button>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="join-item btn">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={
              ('join-item btn',
              {
                selected: pageNumber === currentPage,
              })
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          ('pagination-item',
          {
            disabled: currentPage === lastPage,
          })
        }
        onClick={onNext}
      >
        <button className="join-item btn">»</button>
      </li>
    </ul>
  );
};

export default Pagination;
