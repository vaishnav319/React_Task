import React, { Fragment } from "react";

const Spinner = () => (
  <Fragment>
    <img
      src="spinner.gif"
      style={{
        width: "100px",
        margin: "auto",
        marginTop: "20%",
        display: "block",
      }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
