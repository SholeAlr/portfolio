import Image from "next/image";

function Forecast({ forecastData, url }) {
  console.log(forecastData);
  return (
    <div className='bg-white lg:col-span-3'>
      <div className='bg-purplish text-center  text-white p-3'>
        5-Days Hourly Forecast
      </div>
      <div className='h-[39vh] lg:h-[58vh] overflow-scroll lg:col-span-3 shadow-md lg:grid lg:grid-cols-4'>
        {forecastData.list?.map((eachDay) => {
          return (
            <label
              key={eachDay.dt}
              className='swap swap-flip lg:col-span-1 text-xs p-2 hover:bg-violet-200 flex items-center border px-2 border-b-purplish justify-evenly '
            >
              <input type='checkbox' />
              <div className='swap-off flex flex-row lg:flex-col items-center justify-between'>
                <p>{eachDay.dt_txt.slice(0, 16)}</p>
                <Image
                  src={`${url}/img/w/${eachDay.weather[0].icon}.png`}
                  alt='forecast'
                  width={50}
                  height={50}
                  className='mx-auto'
                />
                <p className='w-[80px]'>{eachDay.weather?.[0]?.description}</p>
              </div>
              <div className='swap-on text-5xl'>
                {eachDay.main.feels_like < 10
                  ? "🥶"
                  : eachDay.main.feels_like > 35
                  ? "🥵"
                  : "🥳"}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
