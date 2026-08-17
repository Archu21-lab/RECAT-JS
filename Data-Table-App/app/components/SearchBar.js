"use client";

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="w-full">

            <div className="relative w-full">

                

                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                        />
                    </svg>

                </div>


                {/* INPUT */}

                <input
                    type="text"
                    placeholder="Search by name, email, phone or city..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-4 focus:ring-gray-100"
                />


                {/* CLEAR BUTTON */}

                {search && (

                    <button
                        type="button"
                        onClick={() =>
                            setSearch("")
                        }
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition hover:bg-gray-900 hover:text-white"
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
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>

                    </button>

                )}

            </div>

        </div>
    );
}
