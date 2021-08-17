import { Box, Typography } from '@material-ui/core';
import React from 'react'
import { Photo } from "./photo";

export const AlbumPhotos = ({albums, photos}) => {
    return (
        <>
            {albums.map((album) => {
            return (
              <div key={album.id}>
                <Typography variant="h2">{album.title}</Typography>
                <Box mt={2}>
                  {photos.map((photo) => {
                    return (
                      photo.albumId === album.id && (
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
        </>
    )
}
