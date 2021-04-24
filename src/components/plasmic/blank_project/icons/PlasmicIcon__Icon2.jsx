// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#Mv_4-ijF6a)"}>
        <path
          d={
            "M0 0h12v4.382a1 1 0 01-1.447.894L6.447 3.224a1 1 0 00-.894 0L1.447 5.276A1 1 0 010 4.382V0z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"Mv_4-ijF6a"}
          x={"0"}
          y={"0"}
          width={"12"}
          height={"6.383"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={"1"}></feOffset>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
