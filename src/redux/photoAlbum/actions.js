import axios from "axios";
import { GET_ALBUMS, GET_PHOTOS } from "./actionTypes";

const albumIds = [1, 2, 3, 4, 5];

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
        console.log(data);
        const items = data.filter((photo) => albumIds.includes(photo.albumId));
        const album1 = [];
        const album2 = [];
        const album3 = [];
        const album4 = [];
        const album5 = [];

        for (let i = 0; i < items.length; i++) {
          if (items[i].albumId === 1 && album1.length < 10) {
            album1.push(items[i]);
          } else if (items[i].albumId === 2 && album2.length < 10) {
            album2.push(items[i]);
          } else if (items[i].albumId === 3 && album3.length < 10) {
            album3.push(items[i]);
          } else if (items[i].albumId === 4 && album4.length < 10) {
            album4.push(items[i]);
          } else if (items[i].albumId === 1 && album5.length < 10) {
            album5.push(items[i]);
          }
        }

        console.log(album1);

        const photos = [
          ...album1.slice(0, 10),
          ...album2.slice(0, 10),
          ...album3.slice(0, 10),
          ...album4.slice(0, 10),
          ...album5.slice(0, 10),
        ];

        console.log(photos);

        dispatch(
          getPhotos(photos)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
