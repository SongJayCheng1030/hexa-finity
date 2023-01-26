import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
      <path
        d="M17.5774 14.3234L19 15.7709V15.8468H11.6696V15.7709L13.1652 14.3234C13.3142 14.1716 13.3886 14.0199 13.3886 13.7908V4.80076C13.3886 4.4184 13.3886 3.88582 13.4646 3.42911L8.52803 16H8.45355L3.36652 4.4184C3.29204 4.11494 3.21756 4.11494 3.14308 3.96321V11.5801C3.06711 12.1142 3.14308 12.5709 3.36652 13.0291L5.38644 15.7709V15.8468H0V15.7709L2.01991 12.9517C2.24336 12.4965 2.31784 11.9624 2.24336 11.5042V3.12565C2.24336 2.74481 2.16888 2.28658 1.87095 1.98312L0.522854 0.0758656V0H5.75884L10.0966 9.82911L13.913 0H19V0.0758656L17.5789 1.75249C17.43 1.90422 17.3555 2.13333 17.3555 2.28506V13.8667C17.3555 14.0184 17.43 14.2475 17.5789 14.3234H17.5774Z"
        fill="#798DC6"
      />
    </svg>
  );
};

export default Icon;
