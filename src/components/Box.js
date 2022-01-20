import React from "react";

const Box = ({ photo }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "justify-between",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "justify-between",
          flexDirection: "row",
        }}
      >
        <div>
          <img style={{ width: "60%" }} src={photo.thumbnailUrl} />
        </div>

        <div>
          <p>{photo.title}</p>
          <a href={photo.url}>{photo.url}</a>
        </div>
      </div>
      <div>
        <p>10:00 am</p>
      </div>
    </div>
  );
};

export default Box;
