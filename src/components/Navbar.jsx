import Image from 'next/image'
import React from 'react'

function GlobalNavbar() {
    return (
        <div className="bg-gray-50 gap-3 py-3 px-6 md:px-10 flex items-center w-full">
            <div className="flex-1">
                <a className="btn btn-ghost p-0">
                    <img src="/logo/streamsage-logo.png" width={40} alt="Logo" />
                </a>
            </div>
            <div className="flex items-center gap-15 flex-1 justify-end">
                <ul className="flex gap-15">
                    <li><a className="text-gray-500 hover:text-gray-700">Feature</a></li>
                    <li><a className="text-gray-500 hover:text-gray-700">Team</a></li>
                    <li><a className="text-gray-500 hover:text-gray-700">About</a></li>
                </ul>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default GlobalNavbar