import React from 'react';

interface CheckBoxOutlineIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  stroke?: string;
  fill?: string;
  className?: string;
}

const CheckBoxOutlineIcon: React.FC<CheckBoxOutlineIconProps> = ({
  width = 30,
  height = 30,
  color,
  stroke,
  fill,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.16667 11.8333L5.83333 14.1667L13.3333 21.6667L30 5L27.6667 2.66667L13.3333 17L8.16667 11.8333ZM26.6667 26.6667H3.33333V3.33333H20V0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V13.3333H26.6667V26.6667Z"
        fill={fill || color || "#6461FB"}
      />
    </svg>
  );
};

export default CheckBoxOutlineIcon; 