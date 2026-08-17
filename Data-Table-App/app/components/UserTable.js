"use client";

export default function UserTable({
    users,
    sortField,
    sortDirection,
    handleSort,
    handleView,
    handleEdit,
    handleDelete,
}) {
    function sortIcon(field) {
        if (sortField !== field) {
            return (
                <span className="ml-1 text-gray-300">
                    ↕
                </span>
            );
        }

        return sortDirection === "asc" ? (
            <span className="ml-1 text-gray-900">
                ↑
            </span>
        ) : (
            <span className="ml-1 text-gray-900">
                ↓
            </span>
        );
    }

    function getInitials(name) {
        if (!name) return "?";

        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    }

    return (
        <div className="w-full overflow-hidden bg-white">

            {/* ================= TABLE ================= */}

            <div className="overflow-x-auto">

                <table className="w-full min-w-[900px]">

                    {/* ================= HEADER ================= */}

                    <thead className="border-b border-gray-200 bg-gray-50">

                        <tr>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                ID
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleSort("name")
                                    }
                                    className="inline-flex items-center transition hover:text-gray-900"
                                >
                                    User
                                    {sortIcon("name")}
                                </button>
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleSort("email")
                                    }
                                    className="inline-flex items-center transition hover:text-gray-900"
                                >
                                    Email
                                    {sortIcon("email")}
                                </button>
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Phone
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Location
                            </th>

                            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Actions
                            </th>

                        </tr>

                    </thead>


                    {/* ================= BODY ================= */}

                    <tbody className="divide-y divide-gray-100">

                        {users.map((user) => (

                            <tr
                                key={user.id}
                                className="group transition hover:bg-gray-50"
                            >

                                {/* ID */}

                                <td className="px-6 py-4">

                                    <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 font-mono text-xs font-medium text-gray-600">
                                        #{user.id}
                                    </span>

                                </td>


                                {/* USER */}

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                                            {getInitials(
                                                user.name
                                            )}
                                        </div>

                                        <div>

                                            <p className="font-semibold text-gray-900">
                                                {user.name}
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                User ID: {user.id}
                                            </p>

                                        </div>

                                    </div>

                                </td>


                                {/* EMAIL */}

                                <td className="px-6 py-4">

                                    <span className="text-sm text-gray-600">
                                        {user.email}
                                    </span>

                                </td>


                                {/* PHONE */}

                                <td className="px-6 py-4">

                                    <span className="text-sm text-gray-600">
                                        {user.phone}
                                    </span>

                                </td>


                                {/* CITY */}

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-2">

                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs">
                                            📍
                                        </span>

                                        <span className="text-sm font-medium text-gray-700">
                                            {user.city}
                                        </span>

                                    </div>

                                </td>


                                {/* ACTIONS */}

                                <td className="px-6 py-4">

                                    <div className="flex justify-end gap-2">

                                        {/* VIEW */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleView(user)
                                            }
                                            title="View user"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12Z"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                        </button>


                                        {/* EDIT */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleEdit(user)
                                            }
                                            title="Edit user"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.832 16.82a4.5 4.5 0 0 1-1.897 1.13l-2.25.675.675-2.25a4.5 4.5 0 0 1 1.13-1.897L16.862 4.487Z"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 7.5 16.5 4.5"
                                                />
                                            </svg>
                                        </button>


                                        {/* DELETE */}

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDelete(
                                                    user.id
                                                )
                                            }
                                            title="Delete user"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.52 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>


                {/* ================= EMPTY STATE ================= */}

                {users.length === 0 && (

                    <div className="flex min-h-[260px] flex-col items-center justify-center px-6 text-center">

                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-7 w-7 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.37 9.37 0 0 0 2.25-.272M15 19.128v-.003c0-1.26-.16-2.46-.45-3.577M15 19.128v.003a8.966 8.966 0 0 1-6 0m6-3.003a9.38 9.38 0 0 0-2.625-.372 9.37 9.37 0 0 0-2.25.272m0 0a9.38 9.38 0 0 1-2.625.372m0 0a8.966 8.966 0 0 1-6 0m6 0v-.003c0-1.26.16-2.46.45-3.577M9 15.128a9.38 9.38 0 0 1-2.625.372A9.37 9.37 0 0 1 4.125 15.228M9 15.128v.003a8.966 8.966 0 0 0 6 0"
                                />
                            </svg>

                        </div>

                        <h3 className="font-semibold text-gray-900">
                            No users found
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            Try changing your search or add a new user.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}
