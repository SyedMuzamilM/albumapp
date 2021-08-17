import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, fetchAlbums } from "../redux/photoAlbum/actions";
import { AlbumPhotos } from "./AlbumPhotos";
import { SearchInput } from "./searchInput";

export const PhotoAlbum = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const [searchedAlbums, setSearchedAlbums] = useState([]);

  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos);
  const albums = useSelector((state) => state.albums);

  const getInputValue = (value) => {
    setSearchValue(value);
    const sPhotos = photos.filter((photo) => photo.title.includes(value));
    setSearchedPhotos(sPhotos);
    const albumIds = sPhotos.map((photo) => photo.albumId);
    const unique = [...new Set(albumIds)];
    const sAlbums = albums.filter((album) => unique.includes(album.id));
    setSearchedAlbums(sAlbums);
  };

  return (
    <div>
      <SearchInput getInputValue={getInputValue} />
      {/* {searchValue && <ShowSearchItems searchValue={searchValue} />} */}
      {searchValue ? (
        <AlbumPhotos albums={searchedAlbums} photos={searchedPhotos} />
      ) : (
        <AlbumPhotos albums={albums} photos={photos} />
      )}
    </div>
  );
};
