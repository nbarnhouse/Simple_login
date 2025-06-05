import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
const SVGComponent = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={12}
      r={11}
      fill="#d9d9d9"
      stroke="#d9d9d9"
      strokeWidth={1}
    />
    <Path
      d="M7.172 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"
      fill="black"
    />
  </Svg>
);
export default SVGComponent;
