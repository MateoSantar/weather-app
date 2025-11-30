'use client';
import Header from "@/app/header/page";
import SearchBar from "@/app/searchBar/page";
import { dm_sans } from "@/app/ui/fonts";
import Today from "@/app/today/page";
import { SetStateAction, useState } from "react";
import DailyForecast from "./forecast/page";
import HourlyForecast from "./hourly_forecast/page";
export default function Home() {

  const [city, setCity] = useState("mar del plata");
  const [unit, setUnit] = useState("metric");
  const handleSearch = (newCity: SetStateAction<string>) => {
    setCity(newCity);
  }
  const handleUnitChange = (newUnit: SetStateAction<string>) => {
    setUnit(newUnit);
  }
  return (
    <div className="flex flex-col w-full items-center">
      <div className="p-6 rounded justify-center flex flex-col items-center gap-5 bg">
        <Header onChange={handleUnitChange} />
        <h1 className={`mt-10 text-white text-3xl text-center ${dm_sans.className} font-[600] tracking-wider`}>
          How&apos;s the sky looking today?
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="w-full">
            <Today city={city} unit={unit} />
            <DailyForecast />
          </div>
          <div className="md:ml-4 h-full w-full md:w-1/3">
            <HourlyForecast />
          </div>
        </div>

      </div>
    </div>

  );
}
