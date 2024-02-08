import Image from "next/image";

function Forecast({ forecastData, url }) {
  return (
    <>
      <div className='bg-purplish text-center lg:col-span-3 text-white p-3'>
        5-Days Hourly Forecast
      </div>
      <div className='lg:col-span-3'>
        {forecastData.list?.map((eachDay) => {
          return (
            <div
              key={eachDay.dt}
              className='flex flex-row text-xs items-center border px-2 border-b-purplish justify-evenly'
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
    </>
  );
}

export default Forecast;
