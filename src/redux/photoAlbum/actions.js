import axios from "axios";
import { GET_ALBUMS, GET_PHOTOS } from "./actionTypes";
import store from "../store";

const albums = store.getState().albums;
const albumIds = albums.map((album) => album.id);


export const getPhotos = (photos) => {
  return {
    type: GET_PHOTOS,
    payload: photos,
  };
};

export const getAlbums = (albums) => {
  return {
    type: GET_ALBUMS,
    payload: albums,
  };
};

export const fetchAlbums = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/")
      .then((response) => {
        const albums = response.data;
        dispatch(getAlbums(albums.slice(0, 5)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => {
        const data = response.data;
        const items = data.filter((photo) => albumIds.includes(photo.albumId));
        const album1 = [];
        const album2 = [];
        const album3 = [];
        const album4 = [];
        const album5 = [];

        items.forEach((item) => {
          switch (item.albumId) {
            case 1:
              album1.push(item);
              break;
            case 2:
              album2.push(item);
              break;
            case 3:
              album3.push(item);
              break;
            case 4:
              album4.push(item);
              break;
            case 5:
              album5.push(item);
              break;
            default:
              break;
          }
        });

        const photos = [
          ...album1.slice(0, 10),
          ...album2.slice(0, 10),
          ...album3.slice(0, 10),
          ...album4.slice(0, 10),
          ...album5.slice(0, 10),
        ];

        // console.log(photos);                                                            

        dispatch(getPhotos(photos));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
