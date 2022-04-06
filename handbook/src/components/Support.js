import React, { useState } from "react";
import clsx from "clsx";
import IconFont from "./iconfonts";
import classes from "./Support.module.css";

const langClassName = clsx(
  classes.lang,
  "animate__animated",
  "animate__zoomIn"
);

export default function Support() {
  const [state, setState] = useState(true);
  return (
    <div
      className={clsx(classes.container, "animate__animated", "animate__swing")}
    >
      <div className={classes.title} onClick={() => setState((f) => !f)}>
        <IconFont className={classes.icon} name="fuwu" color="#fff" />
        <span>服务支持</span>
        <span className={classes.toggle}>
          <IconFont
            className={classes.icon}
            name={state ? "up" : "down"}
            color="#fff"
            size={14}
          />
        </span>
      </div>
      {state && (
        <div
          className={clsx(
            classes.content,
            "animate__animated",
            "animate__fadeIn"
          )}
        >
          如需长期<span className={classes.span}>技术支持</span>或
          <span className={classes.span}>技术外包</span>
          可添加此微信
          <img
            className={classes.img}
            src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%8F%B7-ibaiqian-yellow?cacheSeconds=10800"
            alt="微信号：ibaiqian"
            title="微信号：ibaiqian"
          />
          <br />
          <span className={langClassName}>C#</span>
          <span className={langClassName}>.NET6</span>
          <span className={langClassName}>React</span>
          <span className={langClassName}>Node</span>
          <span className={langClassName}>TypeScript</span>
          <span className={langClassName}>Web</span>
          <span className={langClassName}>Rust</span>
          <span className={langClassName}>桌面</span>
          <span className={langClassName}>React Native</span>
          <span className={langClassName}>小程序</span>
        </div>
      )}
    </div>
  );
}
