import React from "react";

function Loading() {
  return (
    <div className="Loading">
      <div className="LoadingRing">
        <div className="LoadingMask"></div>
      </div>
      <h3 className="centered">Loading...</h3>
    </div>
  );
}

export default Loading;
