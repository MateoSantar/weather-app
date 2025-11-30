import HourIcon from "@/app/ui/hourIcon";
import DailyForecastCard from "./dailyCard/page";

export default function DailyForecast() {
    return (
        <div className="w-full mt-4">
            <h1 className="text-white">Daily forecast</h1>
            <div className="grid grid-cols-7 gap-4">
                <DailyForecastCard day="Tue" icon="rain" max={20} min={14} />
                <DailyForecastCard day="Wed" icon="drizzle" max={21} min={15} />
                <DailyForecastCard day="Thu" icon="sunny" max={24} min={14} />
                <DailyForecastCard day="Fri" icon="clouds" max={25} min={13} />
                <DailyForecastCard day="Sat" icon="thunderstorm" max={21} min={15} />
                <DailyForecastCard day="Sun" icon="snow" max={25} min={16} />
                <DailyForecastCard day="Mon" icon="fog" max={24} min={15}/>
            </div>
        </div>

    );
}