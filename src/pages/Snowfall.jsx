import React from "react";
import Snowfall from "react-snowfall";

const SnowfallEffect = () => {
  return (
    <Snowfall
      color="#ffffff"
      snowflakeCount={80}       // কম flakes, হালকা দেখাবে
      radius={[1, 2]}           // ছোট flakes, subtle look
      speed={[0.2, 0.8]}        // ধীরে পড়া flakes
      wind={[-0.2, 0.2]}        // হালকা horizontal movement
      opacity={[0.4, 0.8]}      // আরও soft transparency
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />
  );
};

export default SnowfallEffect;
