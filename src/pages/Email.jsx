/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import io from 'socket.io-client';
import { PiSignOut, PiSignIn } from 'react-icons/pi';
import { MdRefresh } from 'react-icons/md';
import {
    Button,
    Label,
    TextInput,
} from "flowbite-react";

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { AllUsersTable } from '../components/AllUsersTable';


const Email = () => {
    const navigate = useNavigate();

    const [emails, setEmails] = useState([]);
    const [connected, setConnected] = useState(false);
    


    return (
        <>
            <div className='w-full h-[100vh] overflow-hidden'>

                <div className='w-full h-[10vh]'>
                    <Navbar />
                </div>

                <div className='w-full h-[90vh]'>
                    {connected ? (
                        <div className="flex justify-between w-full h-screen">
                            <div className='w-[15%]'>
                                <Sidebar />
                            </div>

                            <div className="min-w-[85%]">
                                <main className="elative h-full bg-gray-50 dark:bg-gray-900">
                                    <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                                        <div className="mb-1 w-full">
                                            <div className="mb-4">
                                                <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                                                    All Emails
                                                </h1>
                                            </div>
                                            <div className="sm:flex">
                                                <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
                                                    <form className="lg:pr-3">
                                                        <Label htmlFor="users-search" className="sr-only">
                                                            Search
                                                        </Label>
                                                        <div className="relative mt-1 lg:w-64 xl:w-96">
                                                            <TextInput
                                                                id="users-search"
                                                                name="users-search"
                                                                placeholder="Search for users"
                                                            />
                                                        </div>
                                                    </form>
                                                    <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                                                        <div
                                                            // onClick={fetchEmails}
                                                            className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                        >
                                                            <span className="sr-only">Configure</span>
                                                            <MdRefresh className="text-2xl" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
                                                    <Button color="gray">
                                                        <div onClick={() => { }} className="flex items-center gap-x-3">
                                                            <PiSignOut className="text-xl" />
                                                            <span>Disconnect</span>
                                                        </div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col ">
                                        <div className="inline-block w-full align-middle ">
                                            <div className="shadow overflow-y-auto h-screen">
                                                <AllUsersTable emails={emails} />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    ) : (
                        <div className='w-full h-[90vh]  flex justify-center items-center'>
                            <div className="flex items-center gap-2 rounded-lg p-3 text-white bg-[#3d48e9] focus:outline-none focus:ring-4 focus:ring-gray-200 hover:opacity-90 shadow-md">
                                <PiSignIn className="text-xl" />

                                <button onClick={() => setConnected(true)} className="text-sm font-medium">Connect to outlook</button>
                            </div>

                        </div>
                    )}
                </div>
            </div>



        </>
    )
}

export default Email