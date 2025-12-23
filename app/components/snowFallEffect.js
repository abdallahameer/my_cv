"use client";

import { useEffect } from "react";

export default function Snowfall() {
  useEffect(() => {
    // Dynamically import the Web Component
    import("@zachleat/snow-fall");
  }, []);

  return (
    <snow-fall
      count="150"
      style={{
        "--snow-fall-size": "15px",
        "--snow-fall-color": "#66ccff",
      }}
    />
  );
}
