import { GET_PHOTOS } from "../actions/types";

const initialState = {
  loading: true,
  photos: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PHOTOS:
      return {
        loading: false,
        photos: payload,
      };
    default:
      return state;
  }
}
