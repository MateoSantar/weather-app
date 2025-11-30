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
        <div className="mt-15 flex flex-row gap-4 items-center">
            <div className="bg-gray-800 px-3 py-1 rounded-xl">
                <div className="flex flex-row">
                    <Image
                        src="/images/icon-search.svg"
                        width={18}
                        height={0}
                        alt=""
                        className="mr-4 ml-2"
                    />
                    <input
                        className="text-gray-100 w-100 py-2 focus:outline-none"
                        type="text"
                        placeholder="Search for a place..."
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
            </div>
            <button
                onClick={handleClick}
                className="text-white bg-blue-700 rounded h-fit p-2 px-4"
            >
                Search
            </button>
        </div>
    );
}
