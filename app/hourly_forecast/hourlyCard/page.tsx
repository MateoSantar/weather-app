import HourIcon from "@/app/ui/hourIcon";

export default function HourlyForecastCard({icon,hour,temp}:{icon:string,hour:string,temp:number}) {
    return(
        <div className="flex flex-row justify-between items-center p-1 w-full  rounded hourly-bg"  style={{boxShadow: '0px 0px 2px rgba(255, 255, 255, 0.25)'}}>
            <div className="flex flex-row items-center gap-3">
                <HourIcon large={false} weather={icon} />
                <p className="text-white text-sm">{hour}</p>
            </div>
            <p className="text-gray-300 text-sm mr-2">{temp}°</p>
        </div>
    );
}
