import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 4.5V1.5H4.5V4.5H1.5ZM0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5V1ZM8 1.25C8 1.05109 8.07902 0.860322 8.21967 0.71967C8.36032 0.579018 8.55109 0.5 8.75 0.5H13.25C13.4489 0.5 13.6397 0.579018 13.7803 0.71967C13.921 0.860322 14 1.05109 14 1.25C14 1.44891 13.921 1.63968 13.7803 1.78033C13.6397 1.92098 13.4489 2 13.25 2H8.75C8.55109 2 8.36032 1.92098 8.21967 1.78033C8.07902 1.63968 8 1.44891 8 1.25ZM8.75 4C8.55109 4 8.36032 4.07902 8.21967 4.21967C8.07902 4.36032 8 4.55109 8 4.75C8 4.94891 8.07902 5.13968 8.21967 5.28033C8.36032 5.42098 8.55109 5.5 8.75 5.5H13.25C13.4489 5.5 13.6397 5.42098 13.7803 5.28033C13.921 5.13968 14 4.94891 14 4.75C14 4.55109 13.921 4.36032 13.7803 4.21967C13.6397 4.07902 13.4489 4 13.25 4H8.75ZM1.5 9.5V12.5H4.5V9.5H1.5ZM1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H5C5.26522 14 5.51957 13.8946 5.70711 13.7071C5.89464 13.5196 6 13.2652 6 13V9C6 8.73478 5.89464 8.48043 5.70711 8.29289C5.51957 8.10536 5.26522 8 5 8H1ZM8.75 8.5C8.55109 8.5 8.36032 8.57902 8.21967 8.71967C8.07902 8.86032 8 9.05109 8 9.25C8 9.44891 8.07902 9.63968 8.21967 9.78033C8.36032 9.92098 8.55109 10 8.75 10H13.25C13.4489 10 13.6397 9.92098 13.7803 9.78033C13.921 9.63968 14 9.44891 14 9.25C14 9.05109 13.921 8.86032 13.7803 8.71967C13.6397 8.57902 13.4489 8.5 13.25 8.5H8.75ZM8.75 12C8.55109 12 8.36032 12.079 8.21967 12.2197C8.07902 12.3603 8 12.5511 8 12.75C8 12.9489 8.07902 13.1397 8.21967 13.2803C8.36032 13.421 8.55109 13.5 8.75 13.5H13.25C13.4489 13.5 13.6397 13.421 13.7803 13.2803C13.921 13.1397 14 12.9489 14 12.75C14 12.5511 13.921 12.3603 13.7803 12.2197C13.6397 12.079 13.4489 12 13.25 12H8.75Z"
        fill="#11A9FF"
      />
    </svg>
  );
};

export default Icon;
