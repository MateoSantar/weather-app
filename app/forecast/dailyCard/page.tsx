import HourIcon from "@/app/ui/hourIcon";
export default function DailyForecastCard({day,icon,max,min}: {day: string; icon: string; max: number; min: number}) {
    return (
        <div className="flex flex-col justify-center card-bg mt-6 p-3 px-2 rounded-xl ">
            <p className="text-white text-center mb-2">{day}</p>
            <div className="flex justify-center mb-2">
                <HourIcon weather={icon} large={false}/>
            </div>
            <div className="flex justify-center gap-5">
                <p className="text-white font-[500]">{Math.round(max)}°</p>
                <p className="text-gray-400 font-[400]">{Math.round(min)}°</p>
            </div>
        </div>
    );
}
