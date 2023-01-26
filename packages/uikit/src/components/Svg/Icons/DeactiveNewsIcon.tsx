import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1847_4270)">
        <path
          d="M11.332 9.33333C11.332 9.51014 11.2618 9.67971 11.1368 9.80474C11.0117 9.92976 10.8422 10 10.6654 10H5.33203C5.15522 10 4.98565 9.92976 4.86063 9.80474C4.7356 9.67971 4.66536 9.51014 4.66536 9.33333C4.66536 9.15652 4.7356 8.98695 4.86063 8.86193C4.98565 8.7369 5.15522 8.66667 5.33203 8.66667H10.6654C10.8422 8.66667 11.0117 8.7369 11.1368 8.86193C11.2618 8.98695 11.332 9.15652 11.332 9.33333ZM8.66536 11.3333H5.33203C5.15522 11.3333 4.98565 11.4036 4.86063 11.5286C4.7356 11.6536 4.66536 11.8232 4.66536 12C4.66536 12.1768 4.7356 12.3464 4.86063 12.4714C4.98565 12.5964 5.15522 12.6667 5.33203 12.6667H8.66536C8.84218 12.6667 9.01174 12.5964 9.13677 12.4714C9.26179 12.3464 9.33203 12.1768 9.33203 12C9.33203 11.8232 9.26179 11.6536 9.13677 11.5286C9.01174 11.4036 8.84218 11.3333 8.66536 11.3333ZM14.6654 6.99V12.6667C14.6643 13.5504 14.3128 14.3976 13.6879 15.0225C13.063 15.6474 12.2158 15.9989 11.332 16H4.66536C3.78163 15.9989 2.9344 15.6474 2.30951 15.0225C1.68462 14.3976 1.33309 13.5504 1.33203 12.6667V3.33333C1.33309 2.4496 1.68462 1.60237 2.30951 0.97748C2.9344 0.352588 3.78163 0.00105868 4.66536 1.06995e-07H7.67537C8.28844 -0.00157784 8.89575 0.118392 9.46218 0.352973C10.0286 0.587554 10.5429 0.932092 10.9754 1.36667L13.298 3.69067C13.7329 4.12283 14.0776 4.63697 14.3123 5.20332C14.547 5.76966 14.667 6.37695 14.6654 6.99V6.99ZM10.0327 2.30933C9.82289 2.10611 9.58732 1.93128 9.33203 1.78933V4.66667C9.33203 4.84348 9.40227 5.01305 9.52729 5.13807C9.65232 5.2631 9.82189 5.33333 9.9987 5.33333H12.876C12.734 5.07813 12.5589 4.84276 12.3554 4.63333L10.0327 2.30933ZM13.332 6.99C13.332 6.88 13.3107 6.77467 13.3007 6.66667H9.9987C9.46827 6.66667 8.95956 6.45595 8.58448 6.08088C8.20941 5.70581 7.9987 5.1971 7.9987 4.66667V1.36467C7.8907 1.35467 7.7847 1.33333 7.67537 1.33333H4.66536C4.13493 1.33333 3.62622 1.54405 3.25115 1.91912C2.87608 2.29419 2.66536 2.8029 2.66536 3.33333V12.6667C2.66536 13.1971 2.87608 13.7058 3.25115 14.0809C3.62622 14.456 4.13493 14.6667 4.66536 14.6667H11.332C11.8625 14.6667 12.3712 14.456 12.7462 14.0809C13.1213 13.7058 13.332 13.1971 13.332 12.6667V6.99Z"
          fill="#11A9FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1847_4270">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
