import React from "react";
import ScrollToTop from "react-scroll-to-top";

export default function CoolPage() {
  return (
    <>
    <div>
      <ScrollToTop 
      smooth 
      color="#012F43"
      width="40"
      height="40"
      viewBox="0 0 320 512"
      svgPath="M325.606,229.393L175.602,79.393C172.79,76.58 168.974,75 164.996,75C161.017,75 157.202,76.581 154.389,79.394L4.393,229.394C-1.465,235.252 -1.465,244.749 4.393,250.607C10.25,256.464 19.748,256.465 25.606,250.607L164.996,111.214L304.393,250.607C307.322,253.536 311.161,255 315,255C318.839,255 322.678,253.536 325.607,250.606C331.464,244.748 331.464,235.251 325.606,229.393Z"
      className="rounded-full pt-1 hover:bg-coral-500 bg-ocean-700"/>
    </div>
  </>
);
}
