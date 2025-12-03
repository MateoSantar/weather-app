'use client';
import Image from "next/image";
import drizzleIcon from "@/public/images/icon-drizzle.webp";
import fogIcon from "@/public/images/icon-fog.webp";
import overcastIcon from "@/public/images/icon-overcast.webp";
import partlyCloudyIcon from "@/public/images/icon-partly-cloudy.webp";
import rainIcon from "@/public/images/icon-rain.webp";
import stormIcon from "@/public/images/icon-storm.webp";
import sunnyIcon from "@/public/images/icon-sunny.webp";
import snowIcon from "@/public/images/icon-snow.webp";

const weatherIcons = {
    'Drizzle': drizzleIcon.src,
    'Fog': fogIcon.src,
    'Overcast': overcastIcon.src,
    'Clouds': partlyCloudyIcon.src,
    'Rain': rainIcon.src,
    'Thunderstorm': stormIcon.src,
    'Sunny': sunnyIcon.src,
    'Clear': sunnyIcon.src,
    'Snow':snowIcon.src
} as const;

type WeatherKey = keyof typeof weatherIcons;

export default function HourIcon({ weather,large }: { weather: string,large:boolean }) {
    if (large) {
        return(
        <Image
            src={weatherIcons[weather as WeatherKey]}
            alt=""
            width={120}
            height={0}
        />
    );
    }else{
        return(
            <Image
                src={weatherIcons[weather as WeatherKey]}
                alt=""
                width={40}
                height={0}
            />
        );
        
    }

}