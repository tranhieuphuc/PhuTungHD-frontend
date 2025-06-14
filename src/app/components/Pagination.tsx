import { IPagination } from "../interfaces/IPagination";

const Pagination = ({ currentPage, onPageChange, totalPages }: IPagination) => {
    const maxVisiblePages = 5;

    const getPages = (): (number | string)[] => {
        let pages: (number | string)[] = [];
        if (totalPages <= maxVisiblePages) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, 4, "...", totalPages - 1, totalPages];
            } else if (currentPage >= totalPages - 2) {
                pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }
        return pages;

    };


    return (
        <>


            <nav >
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}>
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>

                    {getPages().map((page, index) => (
                        <li key={index}>
                            <button className={`flex items-center justify-center px-4 h-10 leading-tight ms-1 cursor-pointer ${page === currentPage
                                ? "text-white bg-blue-500 border-blue-500"
                                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                                }`}
                                onClick={() => typeof page === "number" && onPageChange(page)}
                                disabled={page === "..."}>
                                {page}
                            </button>
                        </li>

                    ))}



                    <li>
                        <button onClick={() => onPageChange(currentPage + 1)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                            disabled={currentPage === totalPages}>
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>

                        </button>
                    </li>
                </ul>
            </nav>

        </>
    );
};
export default Pagination;