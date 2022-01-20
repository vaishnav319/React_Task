import React, { Fragment, useEffect } from "react";

import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { getPhotos } from "./actions/photos";
import { getAlbums } from "./actions/albums";
import Home from "./components/Home";
import Container from "@mui/material/Container";
function App() {
  useEffect(() => {
    store.dispatch(getPhotos());
    store.dispatch(getAlbums());
  }, []);
  return (
    <Provider store={store}>
      <Fragment className="App">
        <Container maxWidth="lg">
          <Home />
        </Container>
      </Fragment>
    </Provider>
  );
}

export default App;
