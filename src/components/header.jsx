import React from 'react'
import { createPopper } from "@popperjs/core";


export default function Header() {
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };


    return (
        <div>
            <div className="flex flex-row items-center justify-between bg-blue-400">
                <div className="flex items-center">
                    <div><p className="mx-4 bg-blue-600 rounded-full px-2 py-1 hover:bg-white hover:text-black text-white cursor-pointer">Home</p></div>
                    <div className="">
                        <div className="p-2">
                            <div className="bg-white flex items-center rounded-full shadow-xl">
                                <input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

                                <div className="p-4">
                                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <button
                            className={
                                `shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                            bgColor `
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                }
                                onClick={e => e.preventDefault()}
                            >
                                My Orders
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Explore
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                }
                                onClick={e => e.preventDefault()}
                            >
                                All Orders
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Help
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div><p className="mx-1 bg-blue-600 rounded-full px-2 py-1 hover:bg-white hover:text-black text-white cursor-pointer">Serices</p></div>
                <div><p className="mr-4 bg-blue-600 rounded-full px-2 py-1 hover:bg-white hover:text-black text-white cursor-pointer">Contact Us</p></div> */}
            </div>
        </div>
    )
}
