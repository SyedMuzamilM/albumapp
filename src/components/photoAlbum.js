import { Avatar, Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, fetchAlbums } from "../redux/photoAlbum/actions";
import { Photo } from "./photo";
import { SearchInput } from "./searchInput";

export const PhotoAlbum = () => {
  const dispatch = useDispatch();
  const [searchedPhotos, setSearchedPhotos] = useState([]);

  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos);
  const albums = useSelector((state) => state.albums);

  const getInputValue = (value) => {
    const sPhotos = photos.filter(photo => photo.title.includes(value));
    setSearchedPhotos(sPhotos);
  }

  return (
    <div>
      <SearchInput getInputValue={getInputValue} />
      {/* {searchValue && <ShowSearchItems searchValue={searchValue} />} */}
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <Typography variant="h2" >{album.title}</Typography>
            <Box mt={2}>
              {photos.map((photo) => {
                return (
                  photo.albumId == album.id && (
                    <Photo
                      key={photo.id}
                      title={photo.title}
                      url={photo.url}
                      thumbnailUrl={photo.thumbnailUrl}
                    />
                  )
                );
              })}
            </Box>
          </div>
        );
      })}
    </div>
  );
};
