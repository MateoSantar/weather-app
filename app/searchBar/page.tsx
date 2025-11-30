"use client";

import { useState } from "react";
import Image from "next/image";
export default function SearchBar({
    onSearch,
}: {
    onSearch: (place: string) => void;
}) {
    const [place, setPlace] = useState("");

    const handleClick = () => {
        if (place.trim() !== "") {
            onSearch(place);
        }
    };

    return (
        <div className="mt-15 flex flex-col w-full justify-center md:flex-row gap-4 items-center">
            <div className="bg-gray-800 px-3 py-1 w-full md:w-1/2 rounded-xl">
                <div className="flex flex-row w-full">
                    <Image
                        src="/images/icon-search.svg"
                        width={18}
                        height={0}
                        alt=""
                        className="mr-4 ml-2"
                    />
                    <input
                        className="text-gray-100 w-full py-2 focus:outline-none"
                        type="text"
                        placeholder="Search for a place..."
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
            </div>
            <button
                onClick={handleClick}
                className="text-white bg-blue-700 rounded h-fit w-full md:w-auto p-2 px-4"
            >
                Search
            </button>
        </div>
    );
}
