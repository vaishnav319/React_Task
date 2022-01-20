import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Box from "./Box";
import Spinner from "./Spinner";
import { TextField } from "@mui/material";
import store from "../store";
import Order from "./Order";
import { getPhotos } from "../actions/photos";
import { getAlbums } from "../actions/albums";
const Home = ({ photos: { photos }, albums: { albums, loading } }) => {
  useEffect(() => {
    store.dispatch(getPhotos());
    store.dispatch(getAlbums());
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ margin: "1rem", width: "100%" }}>
          <TextField
            id="outlined-basic"
            style={{ width: "100%" }}
            label="Search Here"
            variant="outlined"
          />
          {photos &&
            photos.map((photo) => (
              <Box style={{ width: "100%" }} photo={photo} />
            ))}
        </div>
      )}
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
