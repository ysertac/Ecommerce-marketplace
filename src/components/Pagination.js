import { useDispatch, useSelector } from "react-redux";
import { changePageAction } from "../store/actions/productActions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Pagination({ paginationNumbers }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pageno } = useParams();
  const activePage = useSelector((store) => store.product.activePage);

  return (
    <div className="flex items-center justify-between border-gray-200 bg-white px-4 sm:px-6 pt-24">
      <div className="flex flex-1 items-center justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              href="#"
              disabled={pageno == 1}
              onClick={() => (
                dispatch(changePageAction(activePage - 1)),
                history.push(`/shop/${Number(pageno) - 1}`)
              )}
              className="relative inline-flex items-center rounded-l-md px-2 py-5 bg-[#f3f3f3] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="text-[#bdbdbd] font-bold text-sm leading-6 px-3">
                Previous
              </span>
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {paginationNumbers.map((pageNumber) => (
              <button
                className="relative z-10 inline-flex items-center bg-primaryColor px-4 py-5 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                key={pageNumber}
                onClick={() => (
                  dispatch(changePageAction(pageNumber - 1)),
                  history.push(`/shop/${pageNumber}`)
                )}
              >
                {pageNumber}
              </button>
            ))}
            <button
              href="#"
              disabled={pageno == paginationNumbers.length}
              onClick={() => (
                dispatch(changePageAction(activePage + 1)),
                history.push(`/shop/${Number(pageno) + 1}`)
              )}
              className="relative inline-flex items-center rounded-r-md px-2 py-5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="text-primaryColor font-bold text-sm leading-6 px-3">
                Next
              </span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
