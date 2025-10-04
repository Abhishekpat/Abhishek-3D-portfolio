import React, { useState } from "react";
import Spline from '@splinetool/react-spline';

const ComputersCanvas = ({ onLoad }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
      <Spline
        scene="https://prod.spline.design/h-7Z8-QlksE5Vev6/scene.splinecode"
        onLoad={onLoad}
      />
      <style>{`
        #spline-watermark,
        [id^="spline"],
        a[href*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
};

export default ComputersCanvas;
