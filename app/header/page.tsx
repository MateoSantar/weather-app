'use client';
import Image from "next/image";
import { useState } from "react";
export default function Header(onChange: {
    onChange: (unit: string) => void;
}) {
    const [tempUnit, setTempUnit] = useState("metric");
    const handleUnitChange = (unit: string) => {
        setTempUnit(unit);
        onChange.onChange(unit);
    }
    return (
        <header
            className="flex flex-row justify-between items-center w-full mt-7">
            <Image
                src={"images/logo.svg"}
                alt="logo"
                width={190}
                height={0}
            />
            <div className="flex flex-row card-bg rounded p-2"> {/* Unit select */}
                <Image
                    src={"images/icon-units.svg"}
                    alt="unitslogo"
                    width={15}
                    height={0}
                    className="mr-1"
                />
                <select value={tempUnit} onChange={(e) => handleUnitChange(e.target.value)}
                    className="
                    appeareance-none select-none focus:ring-0 focus:outline-none
                    bg-transparent 
                    border-none 
                    text-white 
                    pr-0">
                    <option value="metric" className="text-black">Metric</option>
                    <option value="imperial" className="text-black">Imperial</option>
                </select>
            </div>

        </header>
    );

}