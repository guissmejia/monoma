import React from "react";
import ReactLoading from "react-loading";

export const Loader: React.FC = () => (
  <div>
    <ReactLoading
      type="spinningBubbles"
      color="white"
      className="loading"
    />
  </div>
);

