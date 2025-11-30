const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


export function GetToday() {
  const todayDate: Date = new Date();
  const diaDelMes: number = todayDate.getDate();
  const anio: number = todayDate.getFullYear();

  const nombreDia: string = todayDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const nombreMes: string = todayDate.toLocaleDateString("en-US", {
    month: "long",
  });

  return `${nombreDia}, ${nombreMes} ${diaDelMes}, ${anio}`;
}

export async function GetFromName(city:string,unit:string) {
  let data =  await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=${unit}`);
  data = await data.json();  
  return data;
}