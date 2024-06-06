/* eslint-disable no-unused-vars */
import { Table } from "flowbite-react";
import { EmailDetailsModal } from "./EmailDetailsModal";

export const AllUsersTable = function () {
    return (
        <Table className="min-w-full overflow-y-auto divide-y divide-gray-200 dark:divide-gray-600">
            <Table.Head className="bg-gray-100 dark:bg-gray-700">
                {/* <Table.HeadCell>
                    <Label htmlFor="select-all" className="sr-only">
                        Select all
                    </Label>
                    <Checkbox id="select-all" name="select-all" />
                </Table.HeadCell> */}
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Subject</Table.HeadCell>
                {/* <Table.HeadCell>Description</Table.HeadCell> */}
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
                            <label htmlFor="checkbox-1" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Neil Sims
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                neil.sims@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap overflow-hidden truncate max-w-[50vw] text- p-4 text-base font-medium text-gray-900 dark:text-white">
                        Front-end developer asdasdasdasdas asdDASDAS ASDASDASDASDaldihgoqifhlhfoiqefhqeoufhoqufuigfjqhfuiegfuiqeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                            <input
                                id="checkbox-2"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            />
                            <label htmlFor="checkbox-2" className="sr-only">
                                checkbox
                            </label>
                        </div>
                    </Table.Cell> */}
                    <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                Roberta Casas
                            </div>
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                roberta.casas@flowbite.com
                            </div>
                        </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                        Designer
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                        <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "}
                            Active
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <EmailDetailsModal />
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};