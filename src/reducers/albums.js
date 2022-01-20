import { GET_ALBUMS } from "../actions/types";

const initialState = {
  loading: true,
  albums: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALBUMS:
      return {
        loading: false,
        albums: payload,
      };
    default:
      return state;
  }
}
