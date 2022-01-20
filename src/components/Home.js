import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Display from "./Display";
import Spinner from "./Spinner";
import { TextField } from "@mui/material";

import Order from "./Order";

const Home = ({ photos: { photos }, albums: { albums, loading } }) => {
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
          <Order />
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
