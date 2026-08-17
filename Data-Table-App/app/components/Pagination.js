"use client";

export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
    totalItems,
    itemsPerPage,
}) {
    if (totalPages === 0) {
        return null;
    }

    const start =
        (currentPage - 1) * itemsPerPage + 1;

    const end = Math.min(
        currentPage * itemsPerPage,
        totalItems
    );

    return (
        <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

            {/* LEFT SIDE */}

            <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                    {start}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900">
                    {end}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                    {totalItems}
                </span>{" "}
                results
            </div>


            {/* RIGHT SIDE */}

            <div className="flex items-center gap-1">

                {/* PREVIOUS BUTTON */}

                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                        setCurrentPage(currentPage - 1)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>


                {/* PAGE NUMBERS */}

                <div className="flex items-center gap-1 px-1">

                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                    ).map((page) => (

                        <button
                            type="button"
                            key={page}
                            onClick={() =>
                                setCurrentPage(page)
                            }
                            className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-medium transition ${
                                currentPage === page
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>

                    ))}

                </div>


                {/* NEXT BUTTON */}

                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        setCurrentPage(currentPage + 1)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-30"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>

            </div>

        </div>
    );
}
