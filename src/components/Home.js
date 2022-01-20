import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "./Box";
import Spinner from "./Spinner";
import { TextField } from "@mui/material";

import Order from "./Order";

const Home = ({ photos: { photos }, albums: { albums, loading } }) => {
  return (
    <div>
      <div style={{ margin: "1rem", width: "100%" }}>
        <TextField
          id="outlined-basic"
          style={{ width: "100%" }}
          label="Search Here"
          variant="outlined"
        />
      </div>
      <h2>{albums[0].title}</h2>
      {/* <Order photos={photos} albums={albums} /> */}
      {photos &&
        photos.map((photo) => <Box style={{ width: "100%" }} photo={photo} />)}
    </div>
  );
};

Home.propTypes = {
  albums: PropTypes.object.isRequired,
  photos: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  albums: state.albums,
  photos: state.photos,
});

export default connect(mapStateProps, {})(Home);
