import DailyForecastCard from "./dailyCard/page";

export default function DailyForecast() {
    return (
        <div className="w-full mt-4">
            <h1 className="text-white">Daily forecast</h1>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4 mb-4 mt-2">
                <DailyForecastCard day="Tue" icon="Rain" max={20} min={14} />
                <DailyForecastCard day="Wed" icon="Drizzle" max={21} min={15} />
                <DailyForecastCard day="Thu" icon="Sunny" max={24} min={14} />
                <DailyForecastCard day="Fri" icon="Clouds" max={25} min={13} />
                <DailyForecastCard day="Sat" icon="Thunderstorm" max={21} min={15} />
                <DailyForecastCard day="Sun" icon="Snow" max={25} min={16} />
                <DailyForecastCard day="Mon" icon="Fog" max={24} min={15}/>
            </div>
        </div>

    );
}