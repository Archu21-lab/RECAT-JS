"use client";

import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/users";

export default function UserForm({
    user,
    onSuccess,
    onClose,
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // ================= LOAD USER =================

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phone: user.phone,
                city: user.city,
            });
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                city: "",
            });
        }

        setErrors({});
    }, [user]);

    // ================= HANDLE CHANGE =================

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    // ================= VALIDATION =================

    function validate() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {
            newErrors.email = "Invalid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // ================= SUBMIT =================

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setLoading(true);

        try {
            const url = user
                ? `${API_URL}/${user.id}`
                : API_URL;

            const method = user
                ? "PUT"
                : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(
                    "Request failed"
                );
            }

            onSuccess();

        } catch (error) {
            console.error(error);

            alert(
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }

    // ================= UI =================

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

            <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

                {/* ================= HEADER ================= */}

                <div className="border-b border-gray-100 px-6 py-5">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                User Management
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900">
                                {user
                                    ? "Edit User"
                                    : "Create New User"}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                {user
                                    ? "Update the user's information below."
                                    : "Enter the user's details to create a new account."}
                            </p>

                        </div>


                        {/* CLOSE */}

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                            ×
                        </button>

                    </div>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-6"
                >

                    {/* NAME */}

                    <div>

                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Full Name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                                errors.name
                                    ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                                    : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
                            }`}
                        />

                        {errors.name && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">
                                {errors.name}
                            </p>
                        )}

                    </div>


                    {/* EMAIL */}

                    <div>

                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                                errors.email
                                    ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                                    : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
                            }`}
                        />

                        {errors.email && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">
                                {errors.email}
                            </p>
                        )}

                    </div>


                    {/* PHONE + CITY */}

                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* PHONE */}

                        <div>

                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Phone Number
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone"
                                className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                                    errors.phone
                                        ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                                        : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
                                }`}
                            />

                            {errors.phone && (
                                <p className="mt-1.5 text-xs font-medium text-red-500">
                                    {errors.phone}
                                </p>
                            )}

                        </div>


                        {/* CITY */}

                        <div>

                            <label
                                htmlFor="city"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                City
                            </label>

                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                                className={`w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 ${
                                    errors.city
                                        ? "border-red-300 focus:border-red-400 focus:ring-red-50"
                                        : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
                                }`}
                            />

                            {errors.city && (
                                <p className="mt-1.5 text-xs font-medium text-red-500">
                                    {errors.city}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* ================= FOOTER ================= */}

                    <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading
                                ? "Saving..."
                                : user
                                ? "Save Changes"
                                : "Create User"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
