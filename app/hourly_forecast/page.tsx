import { dm_sans } from "@/app/ui/fonts";
import HourlyForecastCard from "./hourlyCard/page";
export default function HourlyForecast() {
    return (
        <div className="">
            <div className="flex flex-col card-bg gap-7 p-4 rounded-lg mb-4">
                <div className="flex flex-row w-full justify-between items-center">
                    <h1 className="text-white text-sm">Hourly forecast</h1>
                    <div>
                        <select className={`rounded-md text-white select-bg text-sm p-1 pr-0 ${dm_sans.className}`} name="#" id="#" >
                            <option value="">Monday</option>
                            <option value="">Tuesday</option>
                            <option value="">Wednesday</option>
                            <option value="">Thursday</option>
                            <option value="">Friday</option>
                            <option value="">Saturday</option>
                            <option value="">Sunday</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-4 rounded-lg">
                    <HourlyForecastCard icon="overcast" hour="3 PM" temp={20} />
                    <HourlyForecastCard icon="clouds" hour="4 PM" temp={20} />
                    <HourlyForecastCard icon="sunny" hour="3 PM" temp={20} />
                    <HourlyForecastCard icon="overcast" hour="3 PM" temp={19} />
                    <HourlyForecastCard icon="snow" hour="3 PM" temp={18} />
                    <HourlyForecastCard icon="fog" hour="3 PM" temp={18} />
                    <HourlyForecastCard icon="snow" hour="3 PM" temp={17} />
                    <HourlyForecastCard icon="overcast" hour="3 PM" temp={17} />
                </div>
            </div>
        </div>
    );
}