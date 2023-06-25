import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, onClick, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          className={page === currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <a className="page-link" onClick={() => onClick(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
