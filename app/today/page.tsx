"use client";

import { useState, useEffect } from "react";
import backgroundImage from "@/public/images/bg-today-large.svg";
import { dm_sans, bricolage_Grotesque } from "@/app/ui/fonts";
import { GetFromName, GetToday } from "@/app/lib/fetchData";
import HourIcon from "@/app/ui/hourIcon";

export default function Today({
    city = "mar del plata",
    unit = "metric",
}: {
    city: string;
    unit: string;
}) {
    const [today_data, setTodayData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const data = await GetFromName(city, unit);
                setTodayData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        if (city) {
            fetchData();
        }
    }, [city, unit]);

    if (loading) return <div className="text-white p-10">Cargando clima...</div>;
    if (!today_data || !today_data.main) return <div className="text-white p-10">No se encontraron datos para {city}</div>;

    return (
        <div>
            <div
                className="rounded-xl py-20 px-7 w-full flex flex-row justify-between items-center"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col">
                    <h1 className={`text-white ${dm_sans.className} text-2xl font-[500]`}>
                        {today_data.name}, {today_data.sys?.country || "Earth"}
                    </h1>
                    <p className={`text-white ${bricolage_Grotesque.className} mt-2`}>
                        {`${GetToday()}`}
                    </p>
                </div>
                <div className="flex flex-row items-center gap-5">
                    {today_data.weather && today_data.weather[0] && (
                        <HourIcon weather={today_data.weather[0].main} large={true}/>
                    )}
                    <h1 className="text-white italic text-6xl font-[400]">
                        {Math.round(today_data.main.temp)}°
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="card-bg secondary-text rounded-xl p-4 pt-2 flex flex-col items-center">
                    <p className={`${dm_sans.className} w-full text-left text-sm`}>Feels Like</p>
                    <h2 className={`${bricolage_Grotesque.className} text-2xl pt-3 w-full text-left`}>
                        {Math.round(today_data.main.feels_like)}°
                    </h2>
                </div>
                <div className="card-bg secondary-text rounded-xl p-4 pt-2 flex flex-col items-center">
                    <p className={`${dm_sans.className} w-full text-left text-sm`}>Humidity</p>
                    <h2 className={`${bricolage_Grotesque.className} text-2xl pt-3 w-full text-left`}>
                        {today_data.main.humidity}%
                    </h2>
                </div>
                <div className="card-bg secondary-text rounded-xl p-4 pt-2 flex flex-col items-center">
                    <p className={`${dm_sans.className} w-full text-left text-sm`}>Wind</p>
                    <h2 className={`${bricolage_Grotesque.className} text-2xl pt-3 w-full text-left`}>
                        {today_data.wind.speed} km/h
                    </h2>
                </div>
                <div className="card-bg secondary-text rounded-xl p-4 pt-2 flex flex-col items-center">
                    <p className={`${dm_sans.className} w-full text-left text-sm`}>Precipitation</p>
                    <h2 className={`${bricolage_Grotesque.className} text-2xl pt-3 w-full text-left`}>
                        {today_data.rain ? today_data.rain['1h'] + " mm" : "0 mm"} 
                    </h2>
                </div>
            </div>
        </div>
    );
}