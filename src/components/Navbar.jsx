import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
    }

    return (
        <nav className="fixed z-30 w-full shadow-md bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full p-3 px-6 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center ml-3">
                            <a className="flex items-center" href="/">
                                <img
                                    alt=""
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="mr-3 h-6 sm:h-8"
                                />
                                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                    Email Engine Core
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center lg:gap-3 lg:block">
                            <div
                                className="w-fit dark:text-white flex items-center justify-center gap-3"
                                data-testid="flowbite-tooltip-target"
                            >
                                {/* <button className="flex items-center">
                                    <span>
                                        <span className="sr-only">User menu</span>
                                        <div
                                            className="flex justify-center items-center space-x-4"
                                            data-testid="flowbite-avatar"
                                        >
                                            <div className="relative">
                                                <img
                                                    alt=""
                                                    className="w-8 h-8 rounded-full"
                                                    data-testid="flowbite-avatar-img"
                                                    src="https://flowbite-pro-react-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                />
                                            </div>
                                        </div>
                                    </span>
                                </button> */}
                                <span onClick={handleLogout}>
                                    <button
                                        className="rounded-lg p-2.5 px-6 text-sm text-white bg-[#3d48e9] focus:outline-none focus:ring-4 focus:ring-gray-200 hover:opacity-90 font-medium"
                                    >
                                        Logout
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar