import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [toggle, setToggle] = useState('inbox');

    return (
        <aside
            aria-label="Sidebar with multi-level dropdown example"
            className="flex relative top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700"
        >
            <div className="h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800">
                <div className="flex h-full flex-col justify-between py-2">
                    <div>
                        <div className="" data-testid="flowbite-sidebar-items">
                            <ul
                                className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                                data-testid="flowbite-sidebar-item-group"
                            >
                                <li>
                                    <Link
                                        aria-labelledby="flowbite-sidebar-item-:r6:"
                                        className={`flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 ${toggle === "dashboard" ? "bg-gray-100" : ""}`}
                                        to="/dashboard"
                                        onClick={() => setToggle("dashboard")}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                            data-testid="flowbite-sidebar-item-icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                        <span
                                            className="px-3 flex-1 whitespace-nowrap"
                                            data-testid="flowbite-sidebar-item-content"
                                            id="flowbite-sidebar-item-:r6:"
                                        >
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        aria-labelledby="flowbite-sidebar-item-:r8:"
                                        className={`flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 ${toggle === "inbox" ? "bg-gray-100" : ""}`}
                                        to="/dashboard"
                                        onClick={() => setToggle("inbox")}
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                            data-testid="flowbite-sidebar-item-icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                        </svg>
                                        <span
                                            className="px-3 flex-1 whitespace-nowrap"
                                            data-testid="flowbite-sidebar-item-content"
                                            id="flowbite-sidebar-item-:r8:"
                                        >
                                            Inbox
                                        </span>
                                        <span
                                            className="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full px-2 py-1 p-1 text-xs"
                                            data-testid="flowbite-sidebar-label"
                                        >
                                            <span>3</span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar