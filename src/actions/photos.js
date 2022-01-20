import axios from "axios";
import { GET_PHOTOS } from "./types";
export const getPhotos = () => async (dispatch) => {
  dispatch({ type: GET_PHOTOS });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
