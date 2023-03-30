import React from "react";
import ReactLoading from "react-loading";

export const Loader: React.FC = () => (
  <div>
    <ReactLoading
      type="bubbles"
      color="#47667b"
      className="loading"
    />
  </div>
);

