// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 7"}
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

      <path
        d={
          "M4.645 3.25l2.011-1.992.41-.41c.059-.059.059-.157 0-.235l-.43-.43c-.077-.058-.175-.058-.234 0L4 2.606 1.578.184c-.058-.059-.156-.059-.234 0l-.43.43C.855.69.855.788.914.847L3.336 3.25.914 5.672c-.059.058-.059.156 0 .234l.43.43c.078.059.176.059.234 0L4 3.914l1.992 2.012.41.41c.059.059.157.059.235 0l.43-.43c.058-.078.058-.176 0-.234L4.644 3.25z"
        }
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
