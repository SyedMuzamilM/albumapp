import { GET_ALBUMS, GET_PHOTOS } from "./actionTypes";

const initialState = {
  photos: [],
  albums: [],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };

    case GET_PHOTOS:
      return {
        ...state,
        photos: payload,
      };

    default:
      return state;
  }
};

export default reducer;
