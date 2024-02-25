import Image from "next/image";
function Current({ weatherData, url }) {
  function formatTime(timestamp) {
    if (!timestamp) return;
    let dateObj = new Date(timestamp * 1000);
    let timeOffset = dateObj.getTimezoneOffset() * 60000; //offset in milliseconds
    let localISOTime = new Date(dateObj.getTime() - timeOffset)
      .toISOString()
      .slice(11, 16);
    return localISOTime;
  }
  return (
    <>
      <div className='flex flex-row lg:col-span-2 w-full border bg-purplish p-2 rounded-xl text-sm justify-evenly text-white'>
        {weatherData.weather ? (
          <Image
            src={`${url}/img/w/${weatherData.weather[0].icon}.png`}
            width={100}
            height={100}
            alt='weather icon'
            className='aspect-square w-[100px] h-[100px] rounded-full border border-white bg-cyan mr-2 lg:my-auto'
          />
        ) : (
          <div className='h-[100px] w-[100px] rounded-full bg-black lg:my-auto'></div>
        )}

        <div className='flex flex-col max-h-fit lg:justify-around'>
          <p className='flex'>
            Location: {weatherData.name},{weatherData.sys?.country}
          </p>
          <p>Description: {weatherData.weather?.[0]?.description}</p>
          <p>{weatherData.main?.temp}°C</p>
          <p>Wind Speed: {weatherData.wind?.speed} km/h</p>
        </div>
      </div>
      <div className='flex flex-col text-sm p-2 border border-purplish rounded-xl justify-around'>
        <div className='flex flex-row justify-between'>
          <p>Feels Like: {weatherData.main?.feels_like}°C</p>
          <p>Humidity: {weatherData.main?.humidity}%</p>
        </div>
        <div className='flex flex-row justify-between'>
          <p>Max Temp: {weatherData.main?.temp_max}°C</p>
          <p>Min Temp: {weatherData.main?.temp_min}°C</p>
        </div>

        <p>Pressure: {weatherData.main?.pressure}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <Image
              src={"/images/sunrise.png"}
              alt='sunrise'
              height={20}
              width={20}
            />
            <p>{formatTime(weatherData.sys?.sunrise)}</p>
          </div>

          <div className='flex flex-row'>
            <Image
              src={"/images/sunset.png"}
              alt='sunset'
              height={20}
              width={20}
            />
            <p>{formatTime(weatherData.sys?.sunset)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Current;
