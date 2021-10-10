import { useEffect, useState } from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import Lottie from "react-lottie";
import * as rainAnimationData from "../lottiefiles/16477-rain-background-animation.json";
import * as cloudsAnimationData from "../lottiefiles/8368-cloud.json";

const Rain = (
  <span className="absolute top-0 left-0 opacity-20">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: rainAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={640}
      width={640}
    />
  </span>
);

const Clouds = (
  <span className="absolute top-0 left-0 opacity-5">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: cloudsAnimationData,
        rendererSettings: { preserveAspectRatio: "xMinYMin meet" },
      }}
      height={300}
      width={900}
    />
  </span>
);

const Animations = { Rain, Clouds };

const Weather = ({ weatherInfo }) => {
  if (!weatherInfo)
    return (
      <span className="m-auto">
        <HalfCircleSpinner color="#ffd380" />
      </span>
    );

  return (
    <div className="relative overflow-hidden h-full w-full">
      {Animations[weatherInfo.current.weather[0].main]
        ? Animations[weatherInfo.current.weather[0].main]
        : null}
      <img
        src={`http://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png`}
        className="w-20 mx-auto mt-auto"
      />
      <p className="text-4xl mt-2 mx-auto text-center font-light text-accent">
        {weatherInfo.current.temp} °C
      </p>
      <p
        className="text-sm mt-1 mx-auto mb-auto text-center font-light"
        style={{ color: "#dda260" }}
      >
        Feels like {weatherInfo.current.feels_like} °C
      </p>
    </div>
  );
};

export default Weather;
