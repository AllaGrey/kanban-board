import React from "react";
import icons from "./assets/icons/sprite.svg";

type Props = {
  iconName: string;
  width: string | number;
  height: string | number;
  stroke?: string;
  fill?: string;
};

export const Icon: React.FC<Props> = ({
  iconName,
  width,
  height,
  stroke,
  fill,
}) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};
