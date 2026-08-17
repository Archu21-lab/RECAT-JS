"use client";

import { useEffect, useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import Pagination from "./Pagination";
import UserViewModal from "./UserViewModal";

const API_URL = "http://localhost:3001/users";
const ITEMS_PER_PAGE = 5;

export default function DataTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [sortField, setSortField] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");

    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [viewingUser, setViewingUser] = useState(null);

    // ================= FETCH USERS =================

    async function fetchUsers() {
        try {
            setLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.error(error);

            alert("Failed to load users");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // ================= SEARCH + SORT =================

    const filteredUsers = useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        let result = users.filter((user) => {
            return (
                user.name
                    .toLowerCase()
                    .includes(searchValue) ||

                user.email
                    .toLowerCase()
                    .includes(searchValue) ||

                user.phone
                    .toLowerCase()
                    .includes(searchValue) ||

                user.city
                    .toLowerCase()
                    .includes(searchValue)
            );
        });

        result.sort((a, b) => {
            const first = String(
                a[sortField]
            ).toLowerCase();

            const second = String(
                b[sortField]
            ).toLowerCase();

            if (first < second) {
                return sortDirection === "asc"
                    ? -1
                    : 1;
            }

            if (first > second) {
                return sortDirection === "asc"
                    ? 1
                    : -1;
            }

            return 0;
        });

        return result;
    }, [
        users,
        search,
        sortField,
        sortDirection,
    ]);

    // ================= PAGINATION =================

    const totalPages = Math.ceil(
        filteredUsers.length / ITEMS_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) *
        ITEMS_PER_PAGE;

    const currentUsers =
        filteredUsers.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );

    // ================= SORT =================

    function handleSort(field) {
        if (sortField === field) {
            setSortDirection(
                sortDirection === "asc"
                    ? "desc"
                    : "asc"
            );
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    }

    // ================= ADD =================

    function handleAdd() {
        setEditingUser(null);
        setShowForm(true);
    }

    // ================= EDIT =================

    function handleEdit(user) {
        setEditingUser(user);
        setShowForm(true);
    }

    // ================= VIEW =================

    function handleView(user) {
        setViewingUser(user);
    }

    // ================= DELETE =================

    async function handleDelete(id) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${API_URL}/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Delete failed");
            }

            await fetchUsers();
        } catch (error) {
            console.error(error);

            alert("Failed to delete user");
        }
    }

    // ================= FORM SUCCESS =================

    function handleFormSuccess() {
        setShowForm(false);
        setEditingUser(null);

        fetchUsers();
    }

    // ================= UI =================

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl space-y-6">

                {/* ================= HEADER ================= */}

                <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

                    <div>

                        <div className="mb-2 flex items-center gap-2">

                            <span className="h-2.5 w-2.5 rounded-full bg-purple-600"></span>

                            <span className="text-sm font-medium text-purple-600">
                                User Management
                            </span>

                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                            Users
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage, search and organize your users
                        </p>

                    </div>


                    {/* ADD USER BUTTON */}

                    <button
                        onClick={handleAdd}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md"
                    >

                        <span className="text-lg">
                            +
                        </span>

                        Add User

                    </button>

                </div>


                {/* ================= SEARCH ================= */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                    <div className="mb-3">

                        <h3 className="font-semibold text-slate-900">
                            Search Users
                        </h3>

                        <p className="text-sm text-slate-500">
                            Search by name, email, phone or city
                        </p>

                    </div>

                    <SearchBar
                        search={search}
                        setSearch={(value) => {
                            setSearch(value);
                            setCurrentPage(1);
                        }}
                    />

                </div>


                {/* ================= TABLE ================= */}

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* TABLE HEADER */}

                    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                All Users
                            </h3>

                            <p className="text-sm text-slate-500">
                                {filteredUsers.length} users found
                            </p>

                        </div>


                        <div className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">

                            {filteredUsers.length} Total

                        </div>

                    </div>


                    {/* LOADING */}

                    {loading ? (

                        <div className="flex min-h-[300px] flex-col items-center justify-center gap-3">

                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-purple-600"></div>

                            <p className="text-sm font-medium text-slate-500">
                                Loading users...
                            </p>

                        </div>

                    ) : (

                        <UserTable
                            users={currentUsers}
                            sortField={sortField}
                            sortDirection={sortDirection}
                            handleSort={handleSort}
                            handleView={handleView}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />

                    )}

                </div>


                {/* ================= PAGINATION ================= */}

                {!loading && (

                    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                            totalItems={filteredUsers.length}
                            itemsPerPage={ITEMS_PER_PAGE}
                        />

                    </div>

                )}


                {/* ================= ADD / EDIT FORM ================= */}

                {showForm && (

                    <UserForm
                        user={editingUser}

                        onSuccess={handleFormSuccess}

                        onClose={() => {
                            setShowForm(false);
                            setEditingUser(null);
                        }}
                    />

                )}


                {/* ================= VIEW MODAL ================= */}

                <UserViewModal
                    user={viewingUser}
                    onClose={() =>
                        setViewingUser(null)
                    }
                />

            </div>

        </div>
    );
}
