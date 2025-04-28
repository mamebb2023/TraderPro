import React from "react";

const Divider = ({
  opacity = "0.5",
  width = "90",
  color = "gray",
}: {
  width?: string;
  opacity?: string;
  color?: string;
}) => {
  return (
    <div className="w-full my-2 flex-center rounded-full">
      <div
        style={{
          backgroundColor: `${color}`,
          width: `${width}%`,
          opacity: `${opacity}`,
        }}
        className={`h-[2px]`}
      />
    </div>
  );
};

export default Divider;
