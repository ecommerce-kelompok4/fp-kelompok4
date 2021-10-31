import React, { useState } from "react";

let hover = false;
export default function Tooltip() {
  const [hovering, update] = useState(false);
  return (
    <div>
      <div
        className=""
        onMouseOver={() => {
          hover = true;
          setTimeout(() => {
            if (hover) {
              update(true);
            }
          }, 500);
        }}
        onMouseOut={() => {
          hover = false;
          update(false);
        }}
      >
        {" "}
        Hover over me{" "}
      </div>

      {hovering && <div> hey someone is hovering over me </div>}
    </div>
  );
}
