'use client';
import React, { useEffect, useState } from 'react';
import IUser from '@/app/interfaces/IUser';
import Pagination from '@/app/components/Pagination';
import Skeleton from 'react-loading-skeleton';
import CrudModal from '@/app/components/CrudModal';
import { Bounce, toast } from 'react-toastify';
import { RefreshCcw } from 'lucide-react';

const UsersTable = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [searchResults, setSearchResults] = useState<IUser[] | null>([]);

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;


    const [Loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [sortBy, setSortBy] = useState('phoneNumber');
    const [orderBy, setOrderBy] = useState('asc');

    const [modalOpen, setModalOpen] = useState(false);
    const [extendingItem, setExtendingItem] = useState<IUser | null>(null);


    const notify = ({ text }: { text: string }) => toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    useEffect(() => {
        setLoading(true);
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api-hd/v1/users?page=${currentPage}&limit=10&sortBy=${sortBy}&orderBy=${orderBy}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const res = await response.json();
                console.log(res);
                setUsers(res.data);
                setTotalUsers(res.totalUsers);
                setTotalPages(res.totalPages);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimeout = setTimeout(() => {
            fetchUsers();
        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [currentPage, sortBy, orderBy, BASE_URL, refresh]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchKeyword) return;

            try {
                const response = await fetch(`${BASE_URL}/api-hd/v1/users/search?keyword=${searchKeyword}`);
                if (response.status === 404) {
                    setSearchResults(null);
                    return;
                }

                if (response.status === 200) {
                    const res = await response.json();
                    setSearchResults(res.data);
                }

            } catch (err) {
                console.error('Error during search:', err);
            }
        };

        const debounceTimeout = setTimeout(fetchSearchResults, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchKeyword, BASE_URL]);


    const handleSort = (field: string) => {
        if (sortBy === field) {
            setOrderBy(orderBy === 'asc' ? 'desc' : 'asc');

            notify({ text: `Sorted by "${field}" in ${orderBy === 'asc' ? 'descending' : 'ascending'} order` });
        } else {
            notify({ text: `Sorted by ${field} in ascending order` });
            setSortBy(field);
            setOrderBy('asc');
        }
    }


    const handleCreate = () => {
        setExtendingItem(null);
        setModalOpen(true);
    };

    const handleExtend = (user: IUser) => {
        setExtendingItem(user);
        setModalOpen(true);
    };

    const handleRefresh = () => {
        setRefresh((prev) => !prev);
        setSearchKeyword('');
        setSearchResults([]);
        
    }

    const handleLock = (_id: string) => {
        if (confirm("Are you sure you want to delete this user?")) {
            setUsers((prev) => prev.filter((user) => user._id !== _id));
        }
    };

    if (Loading) {
        return (
            <>
                <header>
                    <h1 className="text-2xl font-bold mb-4" role="heading" aria-level={1}>
                        Admin Dashboard
                    </h1>
                    <section className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition-transform transform hover:scale-105 active:scale-95"
                                aria-label="Add a new user"
                                onClick={handleCreate}
                            >
                                Add User
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer flex items-center transition-transform transform hover:scale-105 active:scale-95"
                                aria-label="refresh data"
                                onClick={handleRefresh}
                            >

                                <span >
                                    <RefreshCcw />
                                </span>
                            </button>
                        </div>

                        <div className="flex space-x-2">
                            <form
                                className="mx-auto"
                                onSubmit={e => e.preventDefault()}
                            >
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                <div className="relative w-96">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="flex w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search Phone Number"
                                        required
                                        value={searchKeyword || ''}
                                        onChange={(e) => setSearchKeyword(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                                    >
                                        Search
                                    </button>
                                    {searchKeyword && (
                                        <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-1 rounded-md max-h-40 overflow-y-auto shadow-lg">
                                            {searchResults && searchResults.map((result) => (
                                                <li
                                                    key={result._id}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setSearchKeyword(result.phoneNumber);
                                                    }}
                                                >
                                                    {result.phoneNumber}
                                                </li>
                                            ))}
                                            {searchResults === null && (
                                                <li className="px-4 py-2 text-gray-500">No results found</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </form>
                        </div>

                    </section>
                </header>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    <Skeleton />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <Skeleton />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <Skeleton />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <Skeleton />
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <Skeleton />
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {Array.from({ length: 10 }).map((_, index) => (
                                <tr key={index} className="bg-white border-b border-gray-200">
                                    <th scope="row" >
                                        <div className='px-6 py-4'>
                                            <Skeleton className='my-2' />
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <Skeleton className='my-2' />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Skeleton className='my-2' />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Skeleton className='my-2' />
                                    </td>
                                    <td className="px-6 py-4">
                                        <Skeleton className='my-2' />
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    <div className="p-4 flex flex-row items-center justify-between bg-white  border-t border-gray-200 ">
                        <div>
                            <span className="text-sm text-gray-700  font-semibold">
                                Total Users: {totalUsers ? totalUsers : 'Loading...'}
                            </span>

                        </div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page: number) => setCurrentPage(page)} />
                    </div>

                </div>

            </>
        );
    }

    return (
        <>
            <header>
                <h1 className="text-2xl font-bold mb-4" role="heading" aria-level={1}>
                    Admin Dashboard
                </h1>
                <section className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                            aria-label="Add a new user"
                            onClick={handleCreate}
                        >
                            Add User
                        </button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer flex items-center"
                            aria-label="refresh data"
                            onClick={handleRefresh}
                        >

                            <span >
                                <RefreshCcw />
                            </span>
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        <form
                            className="mx-auto"
                            onSubmit={e => e.preventDefault()}
                        >
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                            <div className="relative w-96">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="flex w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search Phone Number"
                                    required
                                    value={searchKeyword || ''}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />

                                {searchKeyword && (
                                    <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-1 rounded-md max-h-40 overflow-y-auto shadow-lg">
                                        {searchResults && searchResults.map((result) => (
                                            <li
                                                key={result._id}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setUsers((prev) => prev.filter((user) => user._id === result._id));
                                                    setTotalUsers(1);
                                                    setTotalPages(1);
                                                    setCurrentPage(1);
                                                    setSearchResults([]);
                                                }}
                                            >
                                                {result.phoneNumber}
                                            </li>
                                        ))}
                                        {searchResults === null && (
                                            <li className="px-4 py-2 text-gray-500">No results found</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </header>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    <label htmlFor="check-all">Phone Number</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Start Date
                                    <button onClick={() => handleSort("startDate")} className='cursor-pointer'><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg></button>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    End Date
                                    <button onClick={() => handleSort("endDate")}
                                        className='cursor-pointer'><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></button>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Status

                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex justify-end items-center">
                                    <span>Action</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="bg-white border-b
                             border-gray-200">
                                <th scope="row" >
                                    <div className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap  flex items-center'>

                                        <label >
                                            {user.phoneNumber}
                                        </label>
                                    </div>

                                </th>
                                <td className="px-6 py-4">
                                    {new Date(user.startDate).toLocaleDateString('en-GB')}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(user.endDate).toLocaleDateString('en-GB')}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${user.endDate > new Date().toISOString() ? 'bg-green-100 text-green-800 ' : 'bg-red-100 text-red-800 '}`}>
                                        {user.endDate > new Date().toISOString() ? 'Active' : 'Expired'}
                                    </span>
                                </td>

                                <td className="px-6 py-4 ">
                                    <div className="mt-2 flex gap-2 justify-end">
                                        <button
                                            onClick={() => handleExtend(user)}
                                            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                                        >
                                            Extend
                                        </button>
                                        <button
                                            onClick={() => handleLock(user._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
                                        >
                                            Lock
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="p-4 flex flex-row items-center justify-between bg-white  border-t border-gray-200 ">
                    <span className="text-sm text-gray-700 font-semibold">
                        Total Users: {totalUsers ? totalUsers : 'Loading...'}
                    </span>

                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page: number) => setCurrentPage(page)} />
                </div>

            </div>

            <CrudModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                initialData={extendingItem || undefined}
                mode={extendingItem ? "edit" : "create"}
                onSuccess={() => {
                    setLoading(true);
                    const fetchUsers = async () => {
                        try {
                            const response = await fetch(`${BASE_URL}/api-hd/v1/users?page=${currentPage}&limit=10&sortBy=${sortBy}&orderBy=${orderBy}`);
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            const res = await response.json();
                            setUsers(res.data);
                            setTotalUsers(res.totalUsers);
                            setTotalPages(res.totalPages);
                        } catch (error) {
                            console.error('There has been a problem with your fetch operation:', error);
                        } finally {
                            setLoading(false);
                        }
                    };
                    fetchUsers();
                    setSearchKeyword('');
                    setSearchResults([]);
                    

                }}
            />
        </>
    );
};
export default UsersTable;