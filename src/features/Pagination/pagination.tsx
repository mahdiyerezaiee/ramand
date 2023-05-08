import React from "react";
import _ from "lodash";
interface Props {
    noOfPosts:any,
    postsPerPage:number,
    onPageChange:any,
    currentPage:number,
    onPreviousClick:any,
    onNextClick:any,
}
const Pagination = ({
                        noOfPosts,
                        postsPerPage,
                        onPageChange,
                        currentPage,
                        onPreviousClick,
                        onNextClick,
                    }:Props) => {
    const noOfPages = Math.ceil(noOfPosts && noOfPosts.length / postsPerPage);
    const pages = _.range(1, noOfPages + 1);
    if (noOfPages === 1) return null;
    return (
        <nav className="text-center my-2 ">
            <ul  className="pagination mx-auto ">
                {currentPage !== noOfPages && (
                    <li className="page-item">
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={onNextClick}
                        >
                            بعد
                        </a>
                    </li>
                )}
                {pages.map((page:any) => (
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                    >
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                {currentPage !== 1 && (
                    <li className="page-item">
                        <a
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={onPreviousClick}
                        >
                            قبل
                        </a>
                    </li>
                )}

            </ul>
        </nav>
    );
};
export default Pagination;