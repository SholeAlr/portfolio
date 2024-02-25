import Image from "next/image";

function Forecast({ forecastData, url }) {
  return (
    <div className='bg-white lg:col-span-3'>
      <div className='bg-purplish text-center  text-white p-3'>
        5-Days Hourly Forecast
      </div>
      <div className='h-[50vh] overflow-scroll lg:col-span-3 shadow-md lg:grid lg:grid-cols-4'>
        {forecastData.list?.map((eachDay) => {
          return (
            <div
              key={eachDay.dt}
              className='lg:col-span-1 text-xs flex lg:flex-col lg:p-2 hover:bg-violet-200 items-center border px-2 border-b-purplish justify-evenly '
            >
              <div>{eachDay.dt_txt.slice(0, 16)}</div>
              <Image
                src={`${url}/img/w/${eachDay.weather[0].icon}.png`}
                alt='forecast'
                width={50}
                height={50}
              />
              <div>{eachDay.weather?.[0]?.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
